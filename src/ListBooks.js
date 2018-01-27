import React, { Component } from 'react';
import ListOneBook from './ListOneBook'


class ListBooks extends Component
{
  render()
  {
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

// TODO
// render createbook page
// add function
