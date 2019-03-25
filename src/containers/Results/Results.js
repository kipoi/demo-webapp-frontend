import React from "react";
import {connect} from "react-redux";

import "./Results.css";

import {
  MDBCol,
  MDBRow,
  MDBDataTable,
  MDBSpinner
} from "mdbreact";

import {fetchPredictions} from "../../redux/actions/predictionsActions";

const KipoiSmall = require('./img/kipoi_small.png');

class Results extends React.Component {

  componentDidMount() {
    if (this.props.location && this.props.location.state.data) {
      const sequences = this.props.location.state.data;
      this.props.dispatch(fetchPredictions(sequences));
    }
  }

  render() {

    const {predictions, loading, error} = this.props;

    if (loading) {
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
              <MDBCol>
                <MDBSpinner blue big/>
                <br/>
                <h5>Predictions are loading.</h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      )
    }

    else if (error) {
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
              <MDBCol>
                <p>An error occurred. Error: {error}. Please go back and try again.</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      )
    }

    else {
      const data = {
        columns: [
          {'label': 'Name', 'field': 'name'},
          {'label': 'Model', 'field': 'model'},
          {'label': 'Feature', 'field': 'feature'},
          {'label': 'Score', 'field': 'score'},
          {'label': 'Normalized Score', 'field': 'normalized_score'}
        ],
        rows: predictions
      };

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
              <MDBCol>
                <MDBDataTable
                  striped
                  hover
                  entries={100}
                  data={data}
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      );
    }
  }
}

const mapStateToProps = state => ({
  predictions: state.predictionsReducer.predictions,
  loading: state.predictionsReducer.loading,
  error: state.predictionsReducer.error
});

export default connect(mapStateToProps)(Results);
