import * as React from 'react';
import {
    Icon,
    Navbar,
    NavbarBrand,
    NavbarBurger,
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
                <NavbarItem href="#/">
                    <img
                        src={logo}
                        style={{marginRight: 15, marginLeft: 15}}
                    /> Advocado
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-github"/>
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-twitter" style={{color: '#55acee'}}/>
                </NavbarItem>
                <NavbarBurger isActive={active} onClick={onClickNav}/>
            </NavbarBrand>
            <NavbarMenu isActive={active} onClick={onClickNav}>
                <NavbarStart>
                    <NavbarItem href="#/">Home</NavbarItem>
                    <NavbarItem href="#/employees">Employees</NavbarItem>
                    <NavbarItem hasDropdown={true} isHoverable={true}>
                        <NavbarLink href="#/documentation">Documentation</NavbarLink>
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