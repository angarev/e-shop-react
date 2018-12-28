import React from 'react';
import { Menu } from 'semantic-ui-react';


const TopMenu = ({totalPrice, count}) =>(
    <Menu >
        <Menu.Item name='browse'>
            Book shop
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Total Price: &nbsp; <strong>${totalPrice}</strong>
            </Menu.Item>

            <Menu.Item name='help'>
                Cart:  &nbsp; <strong>{count}</strong> &nbsp; items
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);


export default TopMenu;