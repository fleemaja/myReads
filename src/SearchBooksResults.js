import React from 'react'
import Books from './Books.js'
import './App.css'

const SearchBooksResults = ({ books, updateShelfs, getBookshelf }) => (
  <div className="search-books-results">
    <Books books={books}
           updateShelfs={updateShelfs}
           getBookshelf={getBookshelf} />
  </div>
)

export default SearchBooksResults
