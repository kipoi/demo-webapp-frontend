import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem
} from "mdbreact";

const Logo = require('./nav_bar_logo_v3.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({collapseID: ""});

  render() {
    return (
      <Navbar color='unique-color-kipoi' dark expand='sm' fixed='top'>
        <NavbarBrand>
          <Link to={'/'} className={'left-margin'}>
            <img src={Logo} alt='Kipoi' height={50}/>
          </Link>
        </NavbarBrand>

        <NavbarToggler
          onClick={this.toggleCollapse("navbarCollapse")}
        />
        <Collapse
          id="navbarCollapse"
          isOpen={this.state.collapseID}
          navbar
        >

          <NavbarNav left>
            <NavItem>
              <a href={'https://kipoi.org/groups/'} target={'_blank'}>
                <Button outline color={'primary'} className={'nav-button btn'}>
                  Models
                </Button>
              </a>
            </NavItem>
            <NavItem>
              <a href={'https://kipoi.org/about/'} target={'_blank'}>
                <Button outline color={'primary'} className={'nav-button btn'}>
                  About
                </Button>
              </a>
            </NavItem>
            <NavItem>
              <a href={'https://kipoi.org/docs/'} target={'_blank'}>
                <Button outline color={'primary'} className={'nav-button btn'}>
                  Docs
                </Button>
              </a>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <a href="https://www.biorxiv.org/content/early/2018/07/24/375345.full.pdf" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                White paper <i className="fa fa-file-text-o" aria-hidden="true"/>
              </a>
            </NavItem>
            <NavItem>
              <a href="https://github.com/kipoi/models" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                Model repository<i className="fa fa-github" aria-hidden="true"/>
              </a>
            </NavItem>
            <NavItem>
              <a href="https://github.com/kipoi/kipoi" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                API repository<i className="fa fa-github" aria-hidden="true"/>
              </a>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header;