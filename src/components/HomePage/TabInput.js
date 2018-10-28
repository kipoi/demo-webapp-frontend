import React, {Component} from 'react';
import {Row, InputFile, Button, Input} from 'mdbreact';

class TabInput extends Component {

  fileInputHandler = (files) => {
    console.log(files);
  };

  render() {

    const placeholder = `# Example (BED)\nchr1	100	200\nchr1	200	300\n\n# Example (FASTA)\n>seq1\nACGAT..\n>seq2\nACGAT..`;

    return (
      <Row>
        <div className="col-md-9 d-flex align-items-stretch">
          <InputFile getValue={this.fileInputHandler}/>
        </div>
        <div className="col-md-3 mt-auto mb-auto d-flex align-items-stretch align-middle">
          <Button color={'primary'}>Use Example</Button>
        </div>
        <div className="col-md-9">
          <Input type="textarea" hint={placeholder} rows="15"/>
        </div>
        <div className="col-md-9">
          <Input label="Example label" hint="(Optional)"/>
        </div>
        <div className="col-md-9">
          <Button color="primary">Submit</Button>
        </div>
      </Row>
    )
  }
}

export default TabInput;