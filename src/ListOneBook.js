import React, { Component } from 'react';

// In this component we render a book
// Required props
//  book: the book to render
//  func updateShelf (newBook, shelfName)
class ListOneBook extends Component {

  render() {
    const { book, updateShelf } = this.props
    const coverImg = book.imageLinks.thumbnail

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
            <div className="book-shelf-changer">
              <select
                defaultValue={(book.shelf) ? (book.shelf) : "none" }
                onChange={ (e) => updateShelf(book, e.target.value) }>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}
export default ListOneBook
