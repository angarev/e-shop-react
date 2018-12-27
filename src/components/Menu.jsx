import React from 'react';
import { Menu } from 'semantic-ui-react';


const TopMenu = () =>(
    <Menu >
        <Menu.Item name='browse'>
            Book shop
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Price: &nbsp; <strong>0</strong> $
            </Menu.Item>

            <Menu.Item name='help'>
                Card:  &nbsp; <strong>0</strong> $
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);


export default TopMenu;