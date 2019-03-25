import React from 'react';
import {connect} from 'react-redux';
import {MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact';
import classnames from 'classnames';
import TabInput from "./TabInput";
import {fetchSampleSequences} from "../../redux/actions/sampleActions";

class ModelInput extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: 'predict'
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchSampleSequences());
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }

  render() {

    const {sampleSequences, sampleSequencesLoading, sampleSequencesError} = this.props;

    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified">
          <MDBNavItem>
            <MDBNavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'predict'})}
              onClick={() => {
                this.toggle('predict');
              }}
            >
              Predict
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'score-variants'})}
              onClick={() => {
                this.toggle('score-variants');
              }}
            >
              Score Variants
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'interpret'})}
              onClick={() => {
                this.toggle('interpret');
              }}
            >
              Interpret
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="predict">
            <TabInput fileType="fasta" sample={sampleSequences && sampleSequences['fasta_data']}
                      loading={sampleSequencesLoading}
                      error={sampleSequencesError}/>
          </MDBTabPane>
          <MDBTabPane tabId="score-variants">
            Under construction.
            {/*<TabInput fileType="vcf" sample={sampleSequences && sampleSequences['vcf_data']}*/}
                      {/*loading={sampleSequencesLoading}*/}
                      {/*error={sampleSequencesError}/>*/}
          </MDBTabPane>
          <MDBTabPane tabId="interpret">
            Under construction.
            {/*<TabInput fileType="bed" sample={sampleSequences && sampleSequences['bed_data']}*/}
                      {/*loading={sampleSequencesLoading}*/}
                      {/*error={sampleSequencesError}/>*/}
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  sampleSequences: state.samplesReducer.sampleSequences,
  sampleSequencesLoading: state.samplesReducer.sampleSequencesLoading,
  sampleSequencesError: state.samplesReducer.sampleSequencesError
});

export default connect(mapStateToProps)(ModelInput);