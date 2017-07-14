import React from 'react'
import Books from './Books'
import './App.css'

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {props.shelf.pretty}
    </h2>
    <div className="bookshelf-books">
      <Books updateShelfs={props.updateShelfs} books={props.books} />
    </div>
  </div>
)

export default BookShelf
