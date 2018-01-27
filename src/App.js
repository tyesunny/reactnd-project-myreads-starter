import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'


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

  // return books on specified shelfName
  booksOnShelf = (shelfName) => (
    this.state.books.filter( (book) => book.shelf === shelfName)
  )

  // change book.shelf
  updateShelf = (newBook, shelfName) => {
    BooksAPI.update(newBook, shelfName).then(response => {
      // only update the state variable after the backend is updated
      // update the shelf for this book, it is also reflected in class state
      newBook.shelf = shelfName
      // get list of other books
      const updatedBooks = this.state.books.filter( book => book.id !== newBook.id )
      // add new book to array and set new state
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

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
              <ListBooks
                getBooksOnShelf={this.booksOnShelf}
                updateShelf={this.updateShelf}
              />
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
          <SearchBook
            booksAlreadyPicked={this.state.books}
            updateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp


//TODO:
// feat: Search
