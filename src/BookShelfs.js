import React from 'react'
import BookShelf from './BookShelf'
import './App.css'

class BookShelfs extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          {
            this.props.shelfNames.map(
              (shelf, i) =>
              <BookShelf shelfName={shelf} key={i}
                updateShelfs={this.props.updateShelfs}
                books={this.props.books.filter((b) => b.shelf === shelf )} />
            )
          }
        </div>
      </div>
    )
  }
}

export default BookShelfs
