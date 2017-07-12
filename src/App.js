import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfNames: ['currentlyReading', 'wantToRead', 'read']
  }

  componentWillMount = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  updateShelfs = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => console.log(JSON.stringify(res)))
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main books={this.state.books}
                shelfNames={this.state.shelfNames} />
          )}
        />

        <Route path="/search" render={() => (
          <Search />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
