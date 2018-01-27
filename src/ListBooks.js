import React, { Component } from 'react';
import ListOneBook from './ListOneBook'

// In this component we render books that user has picked, searate them into different shelves respectively
// Required props
//  func getBooksOnShelf(book, shelf)
//  func updateShelf(newBook, shelfName)
class ListBooks extends Component
{
  render()
  {
    // props from App compnent
    const {getBooksOnShelf, updateShelf} = this.props;
    return (
      <div>
        {/* first bookshelf: currently reading */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {getBooksOnShelf("currentlyReading").map( (book) => (
                <ListOneBook
                  book={book}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              ))}
            </ol>
          </div>
        </div>
        {/* second bookshelf: want to read */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {getBooksOnShelf("wantToRead").map( (book) => (
                <ListOneBook
                  book={book}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              ))}
            </ol>
          </div>
        </div>
        {/* third bookshelf: read */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {getBooksOnShelf("read").map( (book) => (
                <ListOneBook
                  book={book}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
