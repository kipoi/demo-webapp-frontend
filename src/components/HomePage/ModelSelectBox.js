import React, {Component} from 'react';

import {
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption
} from 'mdbreact';

class ModelSelectBox extends Component {
  render() {
    return (
      <div>
        <MDBSelect multiple search={true}>
          <MDBSelectInput selected="Choose your models"/>
          <MDBSelectOptions>
            <MDBSelectOption disabled>Choose your models</MDBSelectOption>
            <MDBSelectOption value="divergent-421">Divergent421</MDBSelectOption>
            <MDBSelectOption value="deepsea-predict">DeepSEA/predict</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
      </div>
    );
  }
}

export default ModelSelectBox;