import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
//import Home from '../../pages/Home/Home';
import Books from '../../pages/Books/Books';
import Book from '../../pages/Book/Book';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooksAction from '../../app/actions/fetchBooks';
import {getBooksError, getBooks, getBooksPending} from '../../app/reducers/booksReducer';

 
class App extends React.Component {
  /* constructor(props) {
    super(props); 
  } */

  componentDidMount() {
    const {fetchBooks} = this.props;
    fetchBooks();
  }


  render() {
    const { pending, error } = this.props;

    return (
      <div>
        <Header />
        {(!pending && !error) && (
          <Switch>
            <Route exact path="/books/:bookId" component={Book} />
            <Route path="/" component={Books} />
          </Switch>
        )}
        { !!pending && (<p>Chargement ...</p>) }
        { !!error && (<p>{error}</p>) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getBooksError(state),
  books: getBooks(state),
  pending: getBooksPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBooks: fetchBooksAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);