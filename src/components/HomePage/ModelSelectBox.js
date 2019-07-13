import React, {Component} from 'react';

import {
  MDBRow,
  MDBSelect,
  MDBSpinner,
  MDBContainer
} from 'mdbreact';
import {fetchModelList} from "../../redux/actions/modelListActions";
import {connect} from "react-redux";

class ModelSelectBox extends Component {

  constructor(props) {
    super(props);
  }

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
        <MDBContainer>
          <div>
            An error occurred reading the model list.
          </div>
        </MDBContainer>
      )
    }

    if (models && !loading) {

      const selectModels = models.map((model) => {
        return {'text': model['model'], 'value': model['model']}
      });

      return (
        <MDBContainer>
          <MDBRow>
            <MDBSelect
              id='model-select'
              style={{'width': '100%'}}
              multiple
              search
              options={selectModels}
              selected='Choose models'
              selectAll
              getValue={this.handleModelChange}
            />
          </MDBRow>
        </MDBContainer>
      );
    }

    return (
      <MDBContainer>
        <MDBRow>
          <MDBSpinner blue big/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  models: state.modelListReducer.models,
  loading: state.modelListReducer.loading,
  error: state.modelListReducer.error
});

export default connect(mapStateToProps)(ModelSelectBox);