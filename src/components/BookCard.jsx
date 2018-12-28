import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BookCard = ({title, subtitle, isbn13, price, image}) => (
    <Card>
        <Image src={image}  as='a'
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
    </Card>
);

export default BookCard