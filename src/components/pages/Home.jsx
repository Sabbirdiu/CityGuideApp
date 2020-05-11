import React, { Component } from 'react';
//add context
import { InfoConsumer } from '../../Context';
//improt child page
import Info from '../Info';

class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          return value.info.map((item) => {
            return <Info key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default Home;
