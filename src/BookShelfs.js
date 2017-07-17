import React from 'react'
import BookShelf from './BookShelf'
import * as ShelfNames from './ShelfNames'
import './App.css'

const BookShelfs = ({ books, updateShelfs, getBookshelf }) => (
  <div className="list-books-content">
    <div>
      {
        ShelfNames.names.map(
          (shelf, i) =>
          <BookShelf
            shelf={shelf}
            books={books.filter((b) => b.shelf === shelf.apiName )}
            key={i}
            updateShelfs={updateShelfs}
            getBookshelf={getBookshelf}
          />
        )
      }
    </div>
  </div>
)

export default BookShelfs
