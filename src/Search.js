import React from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Search extends React.Component {
  state = {
    books: []
  }

  searchBooks = (query) => {
    const maxResults = 20
    BooksAPI.search(query, maxResults).then((books) => this.setState({books}))
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks} />
        <SearchBooksResults books={this.state.books} updateShelfs={this.props.updateShelfs} />
      </div>
    )
  }
}

export default Search
