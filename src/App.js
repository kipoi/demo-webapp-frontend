import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'material-design-lite/material.min.css';
import 'mdbreact/dist/css/mdb.css';


import Routes from './Routes';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: '' });

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    return (
      <Router>
        <div>
          <Header/>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: '6rem' }}>
            <Routes />
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
