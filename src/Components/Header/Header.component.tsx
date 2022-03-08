import React from 'react'
import { StyledHeader, Left, Right } from './Header.styles';

const Header = () => {
    return (
        <StyledHeader>
            <Left>
                <a href="#">
                    <p>React blog</p>
                </a>
                <a href="#">
                    <p>Home</p>
                </a>
            </Left>
            {/* - Separare con CSS - */}
            <Right>
                <a href="#">
                    <p>Account</p>
                </a>
            </Right>
        </StyledHeader>
    );   
}

export default Header;