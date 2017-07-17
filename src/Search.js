import React from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Search extends React.Component {
  state = {
    books: []
  }

  searchBooks = (query) => {
    const maxResults = 20
    if (query) {
      BooksAPI.search(query, maxResults).then((books) => this.setState({books}))
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks} />
        <SearchBooksResults books={this.state.books}
                            updateShelfs={this.props.updateShelfs}
                            getBookshelf={this.props.getBookshelf} />
      </div>
    )
  }
}

export default Search
