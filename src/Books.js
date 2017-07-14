import React from 'react'
import Book from './Book'
import './App.css'

class Books extends React.Component {
  render() {
    return (
        <ol className="books-grid">
          {
            this.props.books.map((b, i) => <li key={i}>{<Book updateShelfs={this.props.updateShelfs} book={b}/>}</li>)
          }
        </ol>
    )
  }
}

export default Books
