import React, {Component} from 'react';
import axios from 'axios';
import {Container, Card, Segment} from "semantic-ui-react";
import TopMenu from './Menu';
import BookCard from './BookCard';
import PageLoader from './Loader';
import Filter from '../containers/Filter';
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
                       {!isLoad ? <PageLoader/> : books.map((book, index) => <div key={index}>
                           <h2  className="slider-title">{book.title}</h2>
                           <div  className="slider-image-wrap"><img src={book.image} alt=""/></div>
                       </div>)}
                   </Slider>
               </Segment>
               <Filter/>
               <Segment>
                   <Card.Group itemsPerRow={4}>
                       {!isLoad ? <PageLoader/> : books.map((book, index) =><BookCard key = {index} {...book}/>)}
                   </Card.Group>
               </Segment>
           </Container>
       );
    }
}

export default App;
