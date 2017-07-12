import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelfs extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          {
            this.props.shelfNames.map(
              (shelf) => <BookShelf shelfName={shelf} books={this.props.books.filter((b) => b.shelf === shelf )} />
            )
          }
        </div>
      </div>
    )
  }
}

export default BookShelfs
