import React, { Component } from 'react';
import ListOneBook from './ListOneBook'
import * as BooksAPI from './BooksAPI'


class ListBooks extends Component
{
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


  render()
  {
    return (
      <div>
        {/* first bookshelf: currently reading */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.booksOnShelf("currentlyReading").map( (book) => (
                <ListOneBook book={book} key={book.id} />
              ))}
            </ol>
          </div>
        </div>
        {/* second bookshelf: want to read */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.booksOnShelf("wantToRead").map( (book) => (
                <ListOneBook book={book} key={book.id} />
              ))}
            </ol>
          </div>
        </div>
        {/* third bookshelf: read */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.booksOnShelf("read").map( (book) => (
                <ListOneBook book={book} key={book.id} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks

// TODO
// render bookshelf page
// render createbook page
// add function
