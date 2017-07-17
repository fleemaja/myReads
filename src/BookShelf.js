import React from 'react'
import Books from './Books'
import './App.css'

const BookShelf = ({ shelf, books, getBookshelf, updateShelfs }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {shelf.displayName}
    </h2>
    <div className="bookshelf-books">
      <Books books={books}
             updateShelfs={updateShelfs}
             getBookshelf={getBookshelf}
              />
    </div>
  </div>
)

export default BookShelf
