import React, { Component } from 'react';
import ListOneBook from './ListOneBook'


class ListBooks extends Component
{
  // return books on specified shelfName
  booksOnShelf = (shelfName) => (
    this.props.books.filter( (book) => book.shelf === shelfName)
  )

  render()
  {
    return (
      <div>
        /* first bookshelf: currently reading */
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
        /* second bookshelf: want to read */
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
        /* third bookshelf: read */
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
