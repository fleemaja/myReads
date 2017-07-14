import React from 'react'
import Book from './Book'
import './App.css'

const Books = (props) => (
  <ol className="books-grid">
    {
      props.books.map((b, i) => <li key={i}>
        {<Book updateShelfs={props.updateShelfs} book={b}/>}
      </li>)
    }
  </ol>
)

export default Books
