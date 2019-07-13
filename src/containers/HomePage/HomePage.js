import React from "react";

import "./HomePage.css";

import {
  MDBCol,
  MDBRow
} from "mdbreact";
import ModelSelectBox from "../../components/HomePage/ModelSelectBox";
import ModelInput from "../../components/HomePage/ModelInput";

const KipoiSmall = require('./img/kipoi_small.png');

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedModels: []
    };
  }

  handleModelSelect = (values) => {
    this.setState({
      selectedModels: values
    });
  };

  render() {
    return (
      <MDBRow>
        <MDBCol lg='9' className={'mx-auto'}>
          <MDBRow className={'mb-4'}>
            <MDBCol className={'media kipoi-title-box d-none d-sm-flex'}>
              <div className={'media-left'}>
                <img src={KipoiSmall} className={'media-object'} alt="Kipoi Logo" height={80}/>
              </div>
              <div className={'media-body'}>
                <h3 className="media-heading">: Model zoo for genomics</h3>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <h5 className={'text-center'}>1. Select models</h5>
            <ModelSelectBox handleModelSelect={this.handleModelSelect}/>
          </MDBRow>
          <MDBRow>
            <h5 className={'text-center'}>2. Provide input data</h5>
            <ModelInput selectedModels={this.state.selectedModels}/>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default HomePage;
