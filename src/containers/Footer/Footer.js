import React, {Component} from 'react';

import {MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import './style.css';

library.add(faFileAlt);
library.add(faGithub);

class KipoiFooter extends Component {

  static getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <MDBFooter color="unique-color" className={'page-footer'}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg={'3'} md={'6'} className={'ml-auto'}>
              <h5 className="title mb-3"><strong>About KIPOI project</strong></h5>
              <p>Kipoi is an API and a repository of ready-to-use trained models for regulatory genomics.</p>
            </MDBCol>
            <MDBCol lg={'2'} md={'6'} className={'ml-auto'}>
              <h5 className="title mb-3"><strong>Useful links</strong></h5>
              <ul>
                <li>
                  <a href="https://github.com/kipoi/kipoi">API repository <FontAwesomeIcon icon={faGithub}/></a>
                </li>
                <li>
                  <a href="https://github.com/kipoi/models">Model repository <FontAwesomeIcon icon={faGithub}/></a>
                </li>
                <li>
                  <a href="https://github.com/kipoi/website">Website repository <FontAwesomeIcon icon={faGithub}/></a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg={'4'} md={'12'} className={'ml-auto text-center'}>
              <ul>
                <li>
                  <h5>Like the project?</h5>
                </li>
                <li>
                  <a target={'_blank'} href="https://twitter.com/KipoiZoo"
                     className="btn btn-primary waves-effect waves-light" rel="nofollow">Tweet us!</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className={'footer-copyright'}>
          <MDBContainer fluid>
            © {KipoiFooter.getYear()} The Kipoi team, website developed by <a href="https://github.com/zupan"
                                                           className="Nejc Zupan github">Nejc Zupan <FontAwesomeIcon icon={faGithub}/>
          </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default KipoiFooter;