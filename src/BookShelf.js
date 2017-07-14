import React from 'react'
import Books from './Books'
import './App.css'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelfName}
        </h2>
        <div className="bookshelf-books">
          <Books updateShelfs={this.props.updateShelfs} books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default BookShelf
