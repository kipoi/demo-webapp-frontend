import React from "react";
import {connect} from "react-redux";

import "./Results.css";

import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
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

    const handleDownload = () => {
      exportToCsv(csvHeaders, predictions, 'results');
    };

    const csvHeaders = {
      name: 'Name',
      model: 'Model',
      feature: 'Feature',
      score: 'Score',
      normalized_score: 'Normalized Score'
    };

    if (!predictions || predictions.length === 0) {
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
                No data for the predictions.
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      );
    }

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
              <MDBBtn color="primary" onClick={handleDownload}>
                Download Results
              </MDBBtn>
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

const convertToCsv = (objArray) => {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = '';

  for (let result of array) {
    let line = '';
    for (let index in result) {
      if (line !== '') line += ',';

      line += result[index];
    }

    str += line + '\r\n';
  }

  return str;
};

const exportToCsv = (headers, items, fileTitle) => {
  if (headers) {
    items.unshift(headers);
  }

  const jsonObject = JSON.stringify(items);
  const csv = convertToCsv(jsonObject);

  const exportedFilename = `${fileTitle}.csv`;
  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});

  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportedFilename);
  } else {
    const link = document.createElement('a');
    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export default Results;
