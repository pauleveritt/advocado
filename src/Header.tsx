import * as React from 'react';
import {
    Icon,
    Navbar,
    NavbarBrand,
    NavbarDivider,
    NavbarDropdown,
    NavbarEnd,
    NavbarItem,
    NavbarLink,
    NavbarMenu,
    NavbarStart
} from 'bloomer';

import { Bulma } from 'bloomer/lib/bulma';
import Colors = Bulma.Colors;
import { NavLink } from 'react-router-dom';

const logo = require('./advocado_logo.png');

interface HeaderProps {
    color: Colors;
}

export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    const active = false;

    const onClickNav = () => {
        return props;
    };
    return (
        <Navbar style={{backgroundColor: '#00D1B2', margin: '0'}}>
            <NavbarBrand>
                <NavbarItem>
                    <NavLink to={'/'}>
                        <img
                            src={logo}
                            style={{marginRight: 15, marginLeft: 15}}
                        />
                    </NavLink>
                    <NavLink to={'/'}>
                        <div>Advocado</div>
                    </NavLink>
                </NavbarItem>
            </NavbarBrand>
            <NavbarMenu isActive={active} onClick={onClickNav}>
                <NavbarStart>
                    <NavbarItem>
                        <NavLink to={'/employees'}>Employees</NavLink>
                    </NavbarItem>
                    <NavbarItem hasDropdown={true} isHoverable={true}>
                        <NavbarLink href="/documentation">Documentation</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem href="#/">One A</NavbarItem>
                            <NavbarItem href="#/">Two B</NavbarItem>
                            <NavbarDivider/>
                            <NavbarItem href="#/">Two A</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                </NavbarStart>
                <NavbarEnd style={{marginRight: 15}}>
                    <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden="touch">
                        <Icon className="fa fa-github"/>
                    </NavbarItem>
                    <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
                        <Icon className="fa fa-twitter" style={{color: '#55acee'}}/>
                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
};