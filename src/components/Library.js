import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class Library extends Component {
	render() {
		const { books, reviseShelf } = this.props;

		return (
		<div className="list-books">
		  <div className="list-books-title">
			<h1>My Library</h1>
			<h4>A simple app for personal library organization</h4>
		  </div>
		  <div className="list-books-content">
		    <div>
			  <Shelf name="Currently Reading" value="currentlyReading" books={books} reviseShelf={reviseShelf} />
			  <Shelf name="Want to Read" value="wantToRead" books={books} reviseShelf={reviseShelf} />
			  <Shelf name="Read" value="read" books={books} reviseShelf={reviseShelf} />
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
		)
	}
}

export default Library