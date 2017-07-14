import React from 'react'
import Books from './Books.js'
import './App.css'

class SearchBooksResults extends React.Component {
  render() {
    return (
        <div className="search-books-results">
          <Books books={this.props.books} updateShelfs={this.props.updateShelfs} />
        </div>
    )
  }
}

export default SearchBooksResults
