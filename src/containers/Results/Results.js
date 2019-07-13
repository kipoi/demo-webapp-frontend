import React from "react";
import {connect} from "react-redux";

import "./Results.css";

import {
  MDBCol,
  MDBRow,
  MDBDataTable
} from "mdbreact";

const KipoiSmall = require('./img/kipoi_small.png');

class Results extends React.Component {

  render() {

    const {predictions} = this.props.location.state;

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
                  entriesLabel=""
                  entries={25}
                  entriesOptions={[25, 100, 500, 1000]}
                  data={data}
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      );
    }
}

export default Results;
