import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

export default class Filter extends Component {
    state = {activeItem: 'all'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu secondary>
                <Menu.Item
                    name='All'
                    active={activeItem === 'All'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Popular'
                    active={activeItem === 'Popular'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Lowest price'
                    active={activeItem === 'Lowest price'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Highest price'
                    active={activeItem === 'Highest price'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Author'
                    active={activeItem === 'Author'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}