import React, {Component} from 'react';

import {Footer, Container, Row, Col} from 'mdbreact';

import './style.css';

class KipoiFooter extends Component {

  static getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <Footer color="unique-color" className={'page-footer'}>
        <Container fluid>
          <Row>
            <Col lg={'3'} md={'6'} className={'ml-auto'}>
              <h5 className="title mb-3"><strong>About KIPOI project</strong></h5>
              <p>Kipoi is an API and a repository of ready-to-use trained models for regulatory genomics.</p>
            </Col>
            <Col lg={'2'} md={'6'} className={'ml-auto'}>
              <h5 className="title mb-3"><strong>Useful links</strong></h5>
              <ul>
                <li>
                  <a href="https://github.com/kipoi/kipoi">API repository <i className="fa fa-github"
                                                                             aria-hidden="true"/></a>
                </li>
                <li>
                  <a href="https://github.com/kipoi/models">Model repository <i className="fa fa-github"
                                                                                aria-hidden="true"/></a>
                </li>
                <li>
                  <a href="https://github.com/kipoi/website">Website repository <i className="fa fa-github"
                                                                                   aria-hidden="true"/></a>
                </li>
              </ul>
            </Col>
            <Col lg={'4'} md={'12'} className={'ml-auto text-center'}>
              <ul>
                <li>
                  <h5>Like the project?</h5>
                </li>
                <li>
                  <a target={'_blank'} href="https://twitter.com/KipoiZoo"
                     className="btn btn-primary waves-effect waves-light" rel="nofollow">Tweet us!</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={'footer-copyright'}>
          <Container fluid>
            © ${KipoiFooter.getYear()} The Kipoi team, website developed by <a href="https://github.com/zupan"
                                                           className="Nejc Zupan github">Nejc Zupan <i className="fa fa-github" aria-hidden="true"/>
          </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default KipoiFooter;