import React from 'react'
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, Left, Right } from './styled';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user } = useAuth()

    return (
        <div style={{marginBottom: "4rem"}}>
            <HeaderWrapper>
                <Left>
                    <NavLink exact to="/">
                        <p>React blog</p>
                    </NavLink>
                </Left>
                {/* - Separare con CSS - */}
                <Right>
                    <NavLink exact to="/login">
                        <p>{user ? user.name : 'Account'}</p>
                    </NavLink>
                </Right>
            </HeaderWrapper>
        </div>
    );
}

export default Header;