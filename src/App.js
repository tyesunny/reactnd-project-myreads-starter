import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

/* Render Bookshelf page */
class BooksApp extends React.Component {
  // state variable, store books to be rendered in UI
  state = {
    books: []
  }
  // place to execute AJAX request
  componentDidMount() {
    // Call API to fetch all books when componentDidMount
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    console.log(this.state.books) // for debug
    return (
      <div className="app">
        <Route exact path='/' render={() => (

          <div className="list-books">
            {/* title */}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {/* book list. dynamically rendered by react children */}
            <div className="list-books-content">
              <ListBooks books={this.state.books} />
            </div>
            {/* search button */}
            <div className="open-search">
              <Link
                to='/search'
                >Add a book</Link>
            </div>
          </div>
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


//TODO:
// feat: move books from bookshelf
// feat: Search
