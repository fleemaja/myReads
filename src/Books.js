import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Books extends React.Component {
  render() {
    return (
        <ol className="books-grid">
          {
            this.props.books.map((b, i) => <li>{<Book key={i} updateShelfs={this.props.updateShelfs} book={b}/>}</li>)
          }
        </ol>
    )
  }
}

export default Books
