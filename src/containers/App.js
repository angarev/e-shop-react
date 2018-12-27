import {connect} from 'react-redux';
import {setBooks} from '../actions/books';
import App from '../components/App';


const mapStateToProps = ({books}) => (
    {
        books: books.items,
        isLoad: books.isLoad
    }
);

const mapDispatchToProps = dispatch => {
    return ({
        setBooks: books => dispatch(setBooks(books))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
