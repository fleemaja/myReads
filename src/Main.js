import React from 'react'
import AppTitle from './AppTitle'
import BookShelfs from './BookShelfs'
import OpenSearch from './OpenSearch'
import './App.css'

const Main = (props) => (
  <div>
    <AppTitle />
    <BookShelfs books={props.books}
                updateShelfs={props.updateShelfs}
                shelfNames={props.shelfNames} />
    <OpenSearch />
  </div>
)

export default Main
