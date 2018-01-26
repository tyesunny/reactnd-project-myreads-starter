import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

/* Render Bookshelf page */
class BooksApp extends React.Component {

  render()
  {
    return (
      <div className="app">
        {/* show main page */}
        <Route exact path='/' render={() => (
          <div className="list-books">
            {/* title */}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {/* book list. dynamically rendered by react children */}
            <div className="list-books-content">
              <ListBooks />
            </div>
            {/* search button */}
            <div className="open-search">
              <Link
                to='/search'
                >Add a book</Link>
            </div>
          </div>
        )}/>
        {/* show SearchBook page */}
        <Route path='/search' render={() => (
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp


//TODO:
// feat: move books from bookshelf
// feat: Search
