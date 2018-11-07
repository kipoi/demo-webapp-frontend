import React from 'react';
import {TabPane, TabContent, Nav, NavItem, NavLink, Row, Col, Container, InputFile, Button, Input} from 'mdbreact';
import classnames from 'classnames';
import TabInput from "./TabInput";

class ModelInput extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: 'predict'
    };
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }

  render() {

    return (
      <Container>
        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'predict'})}
              onClick={() => {
                this.toggle('predict');
              }}
            >
              Predict
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'score-variants'})}
              onClick={() => {
                this.toggle('score-variants');
              }}
            >
              Score Variants
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'interpret'})}
              onClick={() => {
                this.toggle('interpret');
              }}
            >
              Interpret
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeItem={this.state.activeItem}>
          <TabPane tabId="predict">
            <TabInput fileType="fasta"/>
          </TabPane>
          <TabPane tabId="score-variants">
            <TabInput fileType="vcf"/>
          </TabPane>
          <TabPane tabId="interpret">
            <TabInput fileType="bed"/>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default ModelInput;