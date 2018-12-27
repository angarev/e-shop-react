import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Container, Card, Segment} from "semantic-ui-react";
import {setBooks} from './actions/books';
import TopMenu from './components/Menu';
import BookCard from './components/BookCard';
import PageLoader from './components/Loader';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



class App extends Component {

    componentDidMount() {
        const { setBooks } = this.props;
        axios.get('/books.json').then(({ data }) => {
            setBooks(data);
        });
    }

    render() {
       const {books, isLoad} = this.props;

       return(
           <Container>
               <TopMenu/>
               <Segment>
                   <Slider autoplay = {1}>
                       {!isLoad ? <PageLoader/> : books.books.map((book, index) => <div key={index}>
                           <h2  className="slider-title">{book.title}</h2>
                           <div  className="slider-image-wrap"><img src={book.image} alt=""/></div>
                       </div>)}
                   </Slider>
               </Segment>
               <Segment>
                   <Card.Group itemsPerRow={4}>
                       {!isLoad ? <PageLoader/> : books.books.map((book, index) =><BookCard key = {index} {...book}/>)}
                   </Card.Group>
               </Segment>

           </Container>

       );
    }
}

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
