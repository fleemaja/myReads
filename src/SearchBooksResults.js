import React from 'react'
import Books from './Books.js'
import './App.css'

const SearchBooksResults = (props) => (
  <div className="search-books-results">
    <Books books={props.books}
           updateShelfs={props.updateShelfs} />
  </div>
)

export default SearchBooksResults
