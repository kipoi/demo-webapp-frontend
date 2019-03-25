import React from 'react';
import {
  Row, Col,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption
} from 'mdbreact';
import ModelInput from "./ModelInput";

class InputPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedModels: []
    }
  }

  modelChange = (selected) => {
    this.setState({
      selectedModels: selected
    })
  };

  render() {
    return (
      <Row>
        <Col lg='3' md='3'>
          <h5 className={'text-center'}>1. Select models</h5>
          <div>
            <MDBSelect multiple search={true} getValue={this.modelChange}>
              <MDBSelectInput selected="Choose your models"/>
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your models</MDBSelectOption>
                <MDBSelectOption value="divergent-421">Divergent421</MDBSelectOption>
                <MDBSelectOption value="DeepSEA/predict">DeepSEA/predict</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </div>
        </Col>
        <Col lg='9' md='9'>
          <h5 className={'text-center'}>2. Provide input data</h5>
          <ModelInput models={this.state.selectedModels}/>
        </Col>
      </Row>
    )
  }
}

export default InputPage;