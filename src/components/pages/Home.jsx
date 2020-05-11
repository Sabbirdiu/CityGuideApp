import React, { Component } from 'react';
//add context
import { InfoConsumer } from '../../Context';
//improt child page
import Info from '../Info';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row mt-5'>
          <InfoConsumer>
            {(value) => {
              return value.info.map((items) => {
                return <Info key={items.id} item={items} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default Home;
