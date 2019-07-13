import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {MDBRow, InputFile, Button, MDBInput, MDBSpinner} from 'mdbreact';
import SweetAlert from 'sweetalert-react';
import {splitFastaInput} from '../../helpers/FastaHelper';

class TabInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFileName: null,
      selectedFile: null,
      fileError: null,
      fileType: this.props.fileType,
      inputText: '',
      alertText: null,
      alertTitle: '',
      showAlert: false,
    };
  }

  sampleButtonClick = () => {
    const {sample, error} = this.props;

    this.setState({
      alertTitle: 'Error',
      alertText: error.message,
      showAlert: !!error
    });

    if (sample) {
      this.setState({
        inputText: sample
      });
    }
  };

  fileInputHandler = (event) => {
    const fileName = event[0].name;
    const fileExtension = fileName.split('.').pop();

    if (fileExtension !== this.state.fileType) {
      this.setState({
        fileError: `File extension should be .${this.state.fileType}`
      });
    } else {
      this.setState({
        selectedFileName: fileName,
        selectedFile: event[0],
        fileError: null
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleSubmit = () => {
    let validInput = false;
    let validModels = false;
    let formData = new FormData();

    if (this.state.inputText.length > 0) {
      const parsedInput = splitFastaInput(this.state.inputText);

      if (parsedInput) {
        if (parsedInput['error']) {
          this.setState({
            errorText: parsedInput['error'],
            showError: true
          });
        }

        else {
          formData.append('sequences', JSON.stringify(parsedInput));
          validInput = true;
        }
      }
    }

    else if (this.state.selectedFile && !this.state.fileError) {
      formData.append('file', this.state.selectedFile);
      formData.append('filename', this.state.selectedFileName);
      validInput = true;
    }

    else {
      this.setState({
        alertTitle: 'Error',
        alertText: 'Empty input.',
        showAlert: true
      });
    }

    if (this.props.selectedModels.length === 0) {
      this.setState({
        alertTitle: 'Error',
        alertText: 'No models selected.',
        showAlert: true
      });
    } else {
      formData.append('models', JSON.stringify(this.props.selectedModels));
      validModels = true;
    }

    if (validInput && validModels) {
      this.setState({
        alertTitle: 'Please Wait',
        alertText: 'Loading the predictions.',
        showAlert: true
      });

      fetch('http://localhost:5000/get_predictions', {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
        .then(response => response.json())
        .then(predictions => {

          if (predictions['type'] === 'error') {
            throw new Error(predictions['message']);
          }

          this.props.history.push({
            pathname: 'results',
            state: {
              predictions: predictions
            }
          });
        })
        .catch(error => {
          this.setState({
            alertTitle: 'Error',
            alertText: error.message,
            showAlert: true
          });
        })
    }
  };

  clearInput = () => {
    this.setState({
      inputText: ''
    })
  };

  render() {

    const {loading} = this.props;

    if (loading) {
      return (
        <MDBRow>
          <MDBSpinner blue big/>
        </MDBRow>
      )
    }

    const placeholder = `# Example (BED)\nchr1	100	200\nchr1	200	300\n\n# Example (FASTA)\n>seq1\nACGAT..\n>seq2\nACGAT..`;


    return (
      <MDBRow>
        <div className="col-md-9 d-flex align-items-stretch">
          <InputFile getValue={this.fileInputHandler}/>
        </div>
        <div className="col-md-3 mt-auto mb-auto d-flex align-items-stretch align-middle">
          <Button color={'primary'} disabled={loading} onClick={this.sampleButtonClick}>Use Example</Button>
        </div>
        <div className="col-md-12" style={{height: '20px'}}>
          <p style={{color: 'red'}}>{this.state.fileError}</p>
        </div>
        <div className="col-md-9">
          <MDBInput type="textarea" hint={placeholder} value={this.state.inputText} onChange={this.handleChange}
                    rows="15"
                    style={{'overflow': 'scroll', border: '1px dotted gray', padding: '15px'}}/>
        </div>
        <div className="col-md-9">
          <MDBInput label="Example label" hint="(Optional)"/>
        </div>
        <div className="col-md-9">
          <Button color="primary" disabled={(this.state.fileError && this.state.fileError.length > 0)}
                  onClick={this.handleSubmit}>Submit</Button>
          <Button color="primary" disabled={(this.state.inputText.length === 0)}
                  onClick={this.clearInput}>Clear Input</Button>
        </div>

        <SweetAlert
          show={this.state.showAlert}
          title={this.state.alertTitle}
          text={this.state.alertText}
          onConfirm={() => this.setState({showAlert: false})}
          onOutsideClick={() => this.setState({showAlert: false})}
        />
      </MDBRow>
    )
  }
}

export default withRouter(TabInput);