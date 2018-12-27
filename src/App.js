import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setBooks} from './actions/books'



class App extends Component {

    componentDidMount() {
        const { setBooks } = this.props;
        axios.get('/books.json').then(({ data }) => {
            setBooks(data);
        });
    }

    render() {
       const {books} = this.props;
       return(
           <ul>
               {!books ? "Loading ..." : books.books.map(book =>
                       <li key={book.title}>
                           <strong>{book.title}</strong> - {book.subtitle}
                           <img src={book.image} alt=""/>
                           <p>{book.price}</p>
                       </li>
                   )
               }
           </ul>
       );
    }
}

const mapStateToProps = ({books}) => (
    {
        books: books.items
    }
);

const mapDispatchToProps = dispatch => {
    return ({
        setBooks: books => dispatch(setBooks(books))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
