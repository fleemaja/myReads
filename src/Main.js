import React from 'react'
import AppTitle from './AppTitle'
import BookShelfs from './BookShelfs'
import OpenSearch from './OpenSearch'
import './App.css'

const Main = ({ books, updateShelfs, getBookshelf }) => (
  <div>
    <AppTitle />
    <BookShelfs books={books}
                updateShelfs={updateShelfs}
                getBookshelf={getBookshelf} />
    <OpenSearch />
  </div>
)

export default Main
