import React from "react";

import "./HomePage.css";

import {
  EdgeHeader,
  FreeBird,
  Container,
  Col,
  Row,
  CardBody,
  Fa
} from "mdbreact";

const NavLink = require("react-router-dom").NavLink;

const KipoiSmall = require('./img/kipoi_small.png');

class HomePage extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={9} className={'mx-auto'}>
          <Row className={'mb-4'}>
            <Col className={'media kipoi-title-box d-none d-sm-flex'}>
              <div className={'media-left'}>
                <img src={KipoiSmall} className={'media-object'} alt="Kipoi Logo" height={80}/>
              </div>
              <div className={'media-body'}>
                <h3 className="media-heading">: Model zoo for genomics</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
