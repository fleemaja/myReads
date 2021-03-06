import React from 'react'
import './App.css'

class Book extends React.Component {
  state = {
    shelf: ''
  }

  async componentWillMount() {
    const shelf = await this.props.getBookshelf(this.props.book.id)
    this.setState({shelf})
  }

  handleShelfChange = (e) => {
    const shelf = e.target.value
    this.setState({ shelf })
    this.props.updateShelfs(this.props.book, shelf)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleShelfChange}>
              <option value='' disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors && this.props.book.authors.join(", ")}
        </div>
      </div>
    )
  }
}

export default Book
