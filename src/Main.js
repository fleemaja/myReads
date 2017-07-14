import React from 'react'
import AppTitle from './AppTitle'
import BookShelfs from './BookShelfs'
import OpenSearch from './OpenSearch'
import './App.css'

class Main extends React.Component {

  render() {
    return (
      <div>
        <AppTitle />
        <BookShelfs books={this.props.books} updateShelfs={this.props.updateShelfs} shelfNames={this.props.shelfNames}/>
        <OpenSearch />
      </div>
    )
  }
}

export default Main
