import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'
import './App.css'

class App extends React.Component {
  state = {
    books: []
  }

  loadData() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  componentWillMount = () => {
    this.loadData()
  }

  async getBookshelf(bookId) {
    // use persisted db api to find search result book's shelf
    let shelf = 'none'
    const books = await BooksAPI.getAll()
    books.forEach((b) => {
      if (b.id === bookId) {
        shelf = b.shelf
      }
    })
    return shelf
  }

  updateShelfs = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.loadData()
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main books={this.state.books}
                updateShelfs={this.updateShelfs}
                getBookshelf={this.getBookshelf} />
          )}
        />

        <Route path="/search" render={() => (
          <Search updateShelfs={this.updateShelfs}
                  getBookshelf={this.getBookshelf} />
          )}
        />
      </div>
    )
  }
}

export default App
