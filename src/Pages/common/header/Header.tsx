import React, { useState } from 'react'
import {NavLink, Redirect} from 'react-router-dom';
import { HeaderWrapper, Left, Right } from './styled';
import useAuth from '../hooks/useAuth';
import {Button} from "../styled/styled";

const Header = () => {
    const [state, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { user, logout } = useAuth()
    const [hovered, setHovered] = useState<boolean>(false);
    const [className, setclassName] = useState<string>('');

    const handleMouseHover = () => {
        if (user) {
            setclassName('logout');
        }
        else {
            setclassName('login');
        }
        setHovered(true);
    }

    const handleMouseLeave = () => {
        if(!user) {
            setclassName('login');
        }
        else {
            setclassName('logout');
        }
        setHovered(false);
    }

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

                        <p className={className} onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave} onClick={() => { if(user){ logout(); forceUpdate() } else { return <Redirect to={"/login"} /> } }}>
                            {
                                user
                                    ?
                                    hovered
                                        ?
                                        'Log out'
                                        :
                                        (user.name)
                                    :
                                    <NavLink exact to="/login"> Log in </NavLink>
                            }
                        </p>
                </Right>
            </HeaderWrapper>
        </div>
    );
}

export default Header;