import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBook from './SearchBook'


class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          /* show Bookshelf page */
          <Bookshelf />
        )}/>
        <Route path='/search' render={() => (
          /* show SearchBook page */
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
