import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem
} from 'mdbreact';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

library.add(faFileAlt);
library.add(faGithub);

const Logo = require('./nav_bar_logo_v3.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleMDBCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeMDBCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({collapseID: ""});

  render() {
    return (
      <MDBNavbar color='unique-color-kipoi' dark expand='sm' fixed='top'>
        <MDBNavbarBrand>
          <Link to={'/'} className={'left-margin'}>
            <img src={Logo} alt='Kipoi' height={50}/>
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          onClick={this.toggleMDBCollapse("navbarMDBCollapse")}
        />
        <MDBCollapse
          id="navbarMDBCollapse"
          isOpen={this.state.collapseID}
          navbar
        >

          <MDBNavbarNav left>
            <MDBNavItem>
                  <MDBBtn outline color={'primary'} className={'nav-button btn'}>
                    Models
                  </MDBBtn>
            </MDBNavItem>
            <MDBNavItem>
              <a href={'https://kipoi.org/about/'} target={'_blank'}>
                <MDBBtn outline color={'primary'} className={'nav-button btn'}>
                  About
                </MDBBtn>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href={'https://kipoi.org/docs/'} target={'_blank'}>
                <MDBBtn outline color={'primary'} className={'nav-button btn'}>
                  Docs
                </MDBBtn>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://www.biorxiv.org/content/early/2018/07/24/375345.full.pdf" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                White paper <FontAwesomeIcon icon={faFileAlt}/>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://github.com/kipoi/models" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                Model repository <FontAwesomeIcon icon={faGithub}/>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://github.com/kipoi/kipoi" target={'blank'}
                 className={'text-nowrap nav-link waves-effect waves-light'}>
                API repository <FontAwesomeIcon icon={faGithub}/>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default Header;