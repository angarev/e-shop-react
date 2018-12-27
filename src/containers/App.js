import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as booksActions from '../actions/books';
import * as filterActions from '../actions/filter';
import App from '../components/App';


const mapStateToProps = ({books}) => (
    {
        books: books.items,
        isLoad: books.isLoad
    }
);


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
