import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Library from './components/Library';
import Search from './components/Search';
import './css/App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books
      });
    });
  }

  refreshShelf = (book, revisedShelf) => {
	  BooksAPI.update(book, revisedShelf)
	  .then((res) => {
		  this.setState(prevState => {
			  const books = [...prevState.books];
			  const bookPlace = books.findIndex(b) => b.id === book.id);
			  if (bookPlace  >= 0) {
	        books[bookPlace].shelf = revisedShelf;
	          } else {
		      BooksAPI.get(book.id)
		      .then(res => {
			    if (!res.error)
				  books.push(res);
	  });
}

			  return {
				  books
			  };
		  });
	  });
};
{/*Formatting help from drunkenkismet*/}
  render() {
    return (
      <div className="app">
        <Route exact path ='/' render={() => (
          <Library books = {this.state.books} reviseShelf = {this.refreshShelf} />
        )} />
        <Route path = '/search' render={({ history }) => (
          <Search theseBooks={this.state.books} reviseShelf={this.refreshShelf} />
        )}
        />
        </div>
    );
  }
}

export default BooksApp;
