import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {MDBRow, InputFile, Button, MDBInput, MDBSpinner} from 'mdbreact';
import SweetAlert from 'sweetalert-react';

import {splitFastaInput} from '../../helpers/FastaHelper';

class TabInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      fileError: null,
      fileType: this.props.fileType,
      inputText: '',
      errorText: null,
      showError: false,
      sampleErrorText: null,
      showSampleError: false
    };
  }

  sampleButtonClick = () => {
    const {sample, error} = this.props;

    this.setState({
      sampleErrorText: error,
      showSampleError: !!error
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
        selectedFile: fileName
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleSubmit = () => {
    const parsedInput = splitFastaInput(this.state.inputText);

    if (parsedInput && parsedInput['error']) {
      this.setState({
        errorText: parsedInput['error'],
        showError: true
      })
    }

    this.props.history.push({
      pathname: 'results',
      state: {
        data: {
          'sequences': parsedInput,
          'models': this.props.selectedModels
        }
      }
    });
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
        {/*<div className="col-md-9 d-flex align-items-stretch">*/}
          {/*<InputFile getValue={this.fileInputHandler}/>*/}
        {/*</div>*/}
        <div className="col-md-3 mt-auto mb-auto d-flex align-items-stretch align-middle">
          <Button color={'primary'} disabled={loading} onClick={this.sampleButtonClick}>Use Example</Button>
        </div>
        <div className="col-md-12" style={{height: '20px'}}>
          <p style={{color: 'red'}}>{this.state.fileError}</p>
        </div>
        <div className="col-md-9">
          <MDBInput type="textarea" hint={placeholder} value={this.state.inputText} onChange={this.handleChange} rows="15"
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
          show={this.state.showError}
          title="Error"
          text={this.state.errorText}
          onConfirm={() => this.setState({showError: false})}
          onOutsideClick={() => this.setState({showError: false})}
        />

        <SweetAlert
          show={this.state.showSampleError}
          title="Error"
          text={this.state.sampleErrorText}
          onConfirm={() => this.setState({showSampleError: false})}
          onOutsideClick={() => this.setState({showSampleError: false})}
        />
      </MDBRow>
    )
  }
}

export default withRouter(TabInput);