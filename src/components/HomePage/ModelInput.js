import React from 'react';
import {connect} from 'react-redux';
import {TabPane, TabContent, Nav, NavItem, NavLink, Container} from 'mdbreact';
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
      <Container>
        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'predict'})}
              onClick={() => {
                this.toggle('predict');
              }}
            >
              Predict
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'score-variants'})}
              onClick={() => {
                this.toggle('score-variants');
              }}
            >
              Score Variants
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='#'
              className={classnames({active: this.state.activeItem === 'interpret'})}
              onClick={() => {
                this.toggle('interpret');
              }}
            >
              Interpret
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeItem={this.state.activeItem}>
          <TabPane tabId="predict">
            <TabInput fileType="fasta" sample={sampleSequences && sampleSequences['fasta_data']}
                      loading={sampleSequencesLoading}
                      error={sampleSequencesError}/>
          </TabPane>
          <TabPane tabId="score-variants">
            <TabInput fileType="vcf" sample={sampleSequences && sampleSequences['vcf_data']}
                      loading={sampleSequencesLoading}
                      error={sampleSequencesError}/>
          </TabPane>
          <TabPane tabId="interpret">
            <TabInput fileType="bed" sample={sampleSequences && sampleSequences['bed_data']}
                      loading={sampleSequencesLoading}
                      error={sampleSequencesError}/>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sampleSequences: state.samplesReducer.sampleSequences,
  sampleSequencesLoading: state.samplesReducer.sampleSequencesLoading,
  sampleSequencesError: state.samplesReducer.sampleSequencesError
});

export default connect(mapStateToProps)(ModelInput);