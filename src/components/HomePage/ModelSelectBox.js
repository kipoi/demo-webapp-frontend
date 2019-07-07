import React, {Component} from 'react';

import {
  MDBRow,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBSpinner
} from 'mdbreact';
import {fetchModelList} from "../../redux/actions/modelListActions";
import {connect} from "react-redux";

class ModelSelectBox extends Component {

  componentDidMount() {
    this.props.dispatch(fetchModelList());
  }

  handleModelChange = (values) => {
    this.props.handleModelSelect(values);
  };

  render() {

    const {models, loading, error} = this.props;

    if (error) {
      return (
        <div>
          An error occurred reading the model list.
        </div>
      )
    }

    if (models && !loading) {

      const modelList = models.map((model, index) => {
        return <MDBSelectOption key={index} value={model}>{model}</MDBSelectOption>
      });
      modelList.unshift(<MDBSelectOption key='choose' disabled>Choose your models</MDBSelectOption>);

      return (
        <div>
          <MDBSelect multiple search={true} getValue={this.handleModelChange}>
            <MDBSelectInput selected="Choose your models"/>
            <MDBSelectOptions>
              {modelList.slice(0, 10)}
            </MDBSelectOptions>
          </MDBSelect>
        </div>
      );
    }

    return (
      <MDBRow>
        <MDBSpinner blue big/>
      </MDBRow>
    );
  }
}

const mapStateToProps = state => ({
  models: state.modelListReducer.models,
  loading: state.modelListReducer.loading,
  error: state.modelListReducer.error
});

export default connect(mapStateToProps)(ModelSelectBox);