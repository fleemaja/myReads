import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooksBar extends React.Component {

  state = {
    query: ''
  }

  handleSearch = (e) => {
    const query = e.target.value
    this.setState({ query })
    this.props.searchBooks(query)
  }

  render() {
    return (
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   value={this.state.query}
                   onChange={this.handleSearch}
                   placeholder="Search by title or author"/>
          </div>
        </div>
    )
  }
}

export default SearchBooksBar
