import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'

const BookCard = (book) => {

    const {title, subtitle, isbn13, price, image, addToCart, addedCount} = book;

    return (
        <Card>
            <Image src={image} as='a'
                   size='large'
                   href='#'
                   target='_blank'/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>isbn13: {isbn13}</span>
                </Card.Meta>
                <Card.Description>{subtitle}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Card.Description>${price}</Card.Description>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)} basic color='green'>
                Add to cart {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
    );
};


export default BookCard