import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
//context
import { InfoConsumer } from '../Context';

import PropTypes from 'prop-types';

export class Info extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img,
    } = this.props.content;
    return (
      <InfoConsumer>
        {(data) => (
          <div
            style={{ width: '30rem' }}
            className='  card col-10 col-lg-5 mx-auto mb-5'
          >
            <h3 className='card-title text-uppercase'>{headerTitle}</h3>
            <h5 className='card-title'>{headerSubTitle}</h5>
            <div className=''>
              <Row xs='2'>
                <Col>
                  <img src={img} alt={headerTitle} className='card-img-top' />
                </Col>
                <Col>
                  <img src={img} alt={headerTitle} className='card-img-top' />
                </Col>
              </Row>

              <div className='card-body'>
                <p className='card-text'>{headerText}</p>
                <Link
                  className='btn btn-outline-primary text-uppercase'
                  to='/details'
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
Info.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Info;
