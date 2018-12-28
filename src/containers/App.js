import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy'


const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case "All":
            return orderBy(books,  'id', 'desc');
        case "Lowest price":
            return orderBy(books,  'price', 'asc');
        case "Highest price":
            return orderBy(books,  'price', 'desc');
        case "Isbn":
            return orderBy(books,  'isbn13', 'asc');
        default:
            return books
    }
}

const mapStateToProps = ({books} ) => (
    {
        books: sortBy(books.items, books.filterBy),
        isLoad: books.isLoad,
    }
);



const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
