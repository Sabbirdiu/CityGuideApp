import React, { Component } from 'react';
import { InfoConsumer } from '../../Context';
class Detail extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;
          return (
            <React.Fragment>
              <div className='container-fluid align-items-center'>
                <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
                <h4 className='display-5'>{headerSubTitle}</h4>
                <p>{headerText}</p>
              </div>
              {/* icons */}
              <div className='container mt-5'>
                <div className='row justify-content-center'>
                  <div className='col-2'>
                    <i className='fab fa-facebook' />
                  </div>

                  <div className='col-2'>
                    <i class='fab fa-instagram'></i>
                  </div>
                  <div className='col-2'>
                    <i className='fab fa-twitter' />
                  </div>
                </div>
              </div>
              {/* nav */}
              <div className='container'>
                <ul className='nav nav-tabs'>
                  <li className='nav-item'>
                    <a
                      href='#aboutPlace'
                      className='nav-link active'
                      role='tab'
                      data-toggle='tab'
                    >
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      href='#reviews'
                      className='nav-link active'
                      role='tab'
                      data-toggle='tab'
                    >
                      Reviews
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      href='#map'
                      className='nav-link active'
                      role='tab'
                      data-toggle='tab'
                    >
                      Map
                    </a>
                  </li>
                </ul>
                {/* about */}
                <div className='tab-content mb-5'>
                  <div
                    id='aboutPlace'
                    className='tab-pane in active text-center mt-5'
                    role='tabpanel'
                  >
                    <h2 className='mb-3'>{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className='img-thumbnail img-fluid'
                    />
                  </div>
                  {/* reviews */}
                  <div
                    id='reviews'
                    className='tab-pane in active text-center mt-5'
                    role='tabpanel'
                  >
                    Reviews content
                  </div>
                  {/* map */}
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
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Detail;
