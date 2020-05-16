import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className='my-5 py-5'>
        <div className='container'>
          <div className='well well-sm'>
            <h3>
              <strong>Our location</strong>
            </h3>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <iframe
                src='https://www.google.com/maps/d/u/0/embed?mid=1uTPSzp-duygejbZNTPirPYwUfjmcUz7G'
                style={{
                  height: '300px',
                  width: '100%',
                  border: '0',
                  frameborder: '0',
                }}
                allowFullScreen
              />
            </div>
            <div className=''>
              <input style={{ width: '100%' }} type='text' value='submit' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
