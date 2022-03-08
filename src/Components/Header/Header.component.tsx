import React from 'react'
import { NavLink } from 'react-router-dom';
import { StyledHeader, Left, Right } from './Header.styles';

interface props {
    user:any;
}

const Header = (props:props) => {
    const { user } = props;
    return (
        <StyledHeader>
            <Left>
                <NavLink exact to="/">
                    <p>React blog</p>
                </NavLink>
            </Left>
            {/* - Separare con CSS - */}
            <Right>
                <NavLink exact to="/login">
                    <p>{user ? user : 'Account'}</p>
                </NavLink>
            </Right>
        </StyledHeader>
    );   
}

export default Header;