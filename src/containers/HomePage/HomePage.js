import React from "react";

import "./HomePage.css";

import {
  Col,
  Row
} from "mdbreact";
import ModelSelectBox from "../../components/HomePage/ModelSelectBox";
import ModelInput from "../../components/HomePage/ModelInput";

const KipoiSmall = require('./img/kipoi_small.png');

class HomePage extends React.Component {
  render() {
    return (
      <Row>
        <Col lg='9' className={'mx-auto'}>
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
          <Row>
            <Col lg='3' md='3'>
              <h5 className={'text-center'}>1. Select models</h5>
              <ModelSelectBox/>
            </Col>
            <Col lg='9' md='9'>
              <h5 className={'text-center'}>2. Provide input data</h5>
              <ModelInput/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
