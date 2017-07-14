import React from 'react'
import BookShelf from './BookShelf'
import './App.css'

const BookShelfs = (props) => (
  <div className="list-books-content">
    <div>
      {
        props.shelfNames.map(
          (shelf, i) =>
          <BookShelf shelf={shelf} key={i}
            updateShelfs={props.updateShelfs}
            books={props.books.filter((b) => b.shelf === shelf.ugly )} />
        )
      }
    </div>
  </div>
)

export default BookShelfs
