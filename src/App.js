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
    BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((books) => this.setState({ books })))
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main books={this.state.books}
                updateShelfs={this.updateShelfs}
                shelfNames={this.state.shelfNames} />
          )}
        />

        <Route path="/search" render={() => (
          <Search updateShelfs={this.updateShelfs} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
