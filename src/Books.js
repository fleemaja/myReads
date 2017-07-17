import React from 'react'
import Book from './Book'
import './App.css'

const Books = ({books, updateShelfs, getBookshelf}) => (
  <ol className="books-grid">
    {
      books.map((book, i) =>
        <li key={i}>
          {
            <Book book={book}
                 updateShelfs={updateShelfs}
                 getBookshelf={getBookshelf} />
          }
        </li>)
    }
  </ol>
)

export default Books
