import React from 'react';
import { Menu, List, Popup, Button, Image } from 'semantic-ui-react';

const CartComponent = ({id, title, price, image, removeFromCart}) => (


    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button color="red">Remove</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);


const TopMenu = ({totalPrice, count, items}) =>(
    <Menu >
        <Menu.Item name='browse'>
            Book shop
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Total Price: &nbsp; <strong>${totalPrice}</strong>
            </Menu.Item>
            <Popup
                trigger={ <Menu.Item name='help'>
                    Cart:  &nbsp; <strong>{count}</strong> &nbsp; items
                </Menu.Item>}
                content={items.length > 0 ? items.map( book => <CartComponent {...book }/>) : "No items"}
                on='click'
                hideOnScroll
            />
        </Menu.Menu>


    </Menu>
);


export default TopMenu;