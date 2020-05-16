import React, { Component } from 'react';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };
  formInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
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
            <div className='col-md-5 container'>
              <div className=' card p-4'>
                <h4>
                  <strong>Contact Us</strong>
                </h4>
                <form action='' onSubmit={this.handleSubmit}>
                  <input
                    className='form-control my-2'
                    type='text'
                    placeholder='enter your name'
                    name='name'
                    value={this.state.name}
                    onChange={this.formInput}
                  />
                  <input
                    className='form-control my-2'
                    type='email'
                    placeholder='enter your email'
                    name='email'
                    value={this.state.email}
                    onChange={this.formInput}
                  />
                  <textarea
                    className='form-control my-2'
                    type='textarea'
                    placeholder='Message'
                    name='message'
                    value={this.state.message}
                    onChange={this.formInput}
                  />
                  <button
                    type='submit'
                    className='my-2 btn btn-outline-primary'
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
