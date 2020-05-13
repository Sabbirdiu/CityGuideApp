import React, { Component } from 'react';
import { InfoConsumer } from '../../../Context';

class About extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const { id, title, description, img } = data.detailInfo;
          return (
            <div
              id='aboutPlace'
              className='tab-pane in active text-center mt-5'
              role='tabpanel'
            >
              <h2 className='mb-3'>{title}</h2>
              <p>{description}</p>
              <img src={img} alt={title} className='img-thumbnail img-fluid' />
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default About;
