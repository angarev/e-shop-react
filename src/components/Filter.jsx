import React from 'react';
import {Menu} from 'semantic-ui-react';


const Filter = ({setFilter, filterBy}) => (
    <Menu secondary>
        <Menu.Item
            name='All'
            active={filterBy === 'All'}
            onClick={setFilter.bind(this, 'All')}
        />
        <Menu.Item
            name='Lowest price'
            active={filterBy === 'Lowest price'}
            onClick={setFilter.bind(this, 'Lowest price')}
        />
        <Menu.Item
            name='Highest price'
            active={filterBy === 'Highest price'}
            onClick={setFilter.bind(this, 'Highest price')}
        />
        <Menu.Item
            name='Isbn'
            active={filterBy === 'Isbn'}
            onClick={setFilter.bind(this, 'Isbn')}
        />
    </Menu>
);

export default Filter