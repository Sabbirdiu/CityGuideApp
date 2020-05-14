import React, { Component } from 'react';
import {InfoConsumer} from '../../../Context'
class Map extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const { id, maps } = data.detailInfo;
          return (
            <div
            id='map'
            className='tab-pane in active text-center mt-5'
            role='tabpanel'
          >
            <iframe
              src={maps}
              style={{
                border: '0',
                height: '28.12',
                width: '100%',
                frameborder: '0',
              }}
            ></iframe>
          </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Map;
