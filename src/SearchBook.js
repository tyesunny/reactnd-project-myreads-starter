import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListOneBook from './ListOneBook'



class SearchBook extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if (!query)
    {
      // if query = ''
      this.setState({query: '', books: []})
    }
    else
    {
      // if valid query, update the state variable
      this.setState({ query: query.trim() })
      BooksAPI.search(query)
      .then((queriedBooks) => {
        // update the queried books's shelf to the one user has set
        queriedBooks.map(queriedBook => (
          this.props.booksAlreadyPicked.filter((b) => b.id === queriedBook.id).map(b => queriedBook.shelf = b.shelf)
        ))
        this.setState({books: queriedBooks})
      })
    }
  }

  render()
  {
    const {updateShelf} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={ (e) => this.updateQuery(e.target.value) }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map( (book) => (
              <ListOneBook
                book={book}
                key={book.id}
                updateShelf={updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}



export default SearchBook
