import React from 'react';
import styled from 'styled-components';
function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container'>
          <div className='row footer'>
            {/* col 1 */}
            <div className='col-md-3 col-sm-6 menu '>
              <h4>Contact</h4>
              <ul className='list-unstyled'>
                <li>Bangladesh, Dhaka</li>
                <li>Dhanmondi,27-Sobahanbag </li>
              </ul>
            </div>
            {/* col 1 */}
            <div className='col-md-3 col-sm-6 main'>
              <h4>lorem ipsm</h4>
              <ul className='list-unstyled second-col'>
                <li>
                  <a href='/'>lorem</a>
                </li>
                <li>
                  <a href='/'>lorem</a>
                </li>
                <li>
                  <a href='/'>lorem</a>
                </li>
                <li>
                  <a href='/'>lorem</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className='footer-bottom'
            style={{ borderTop: '2px solid white' }}
          >
            <div>
              <p className='text-xs-center'>
                &copy;{new Date().getFullYear()} TouristGuide App - All Rights
                Reserved
              </p>
            </div>
            {/* icons */}
            <div className='socialicon' style={{ float: 'right' }}>
              <div className='row justify-content-left'>
                <div className='col-1 mx-3'>
                  <i className='fab fa-facebook fa-2x' />
                </div>

                <div className='col-1'>
                  <i class='fab fa-instagram fa-2x'></i>
                </div>
                <div className='col-1  mx-3'>
                  <i className='fab fa-twitter fa-2x' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: white;
  }
  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

  ul li a {
    color: var(--mainGrey);
    text-decoration: none;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
  @media (max-width: 768px) {
    .menu {
      width: 50%;
      float: left;
      padding: 15px;
    }
    .main {
      width: 50%;
      float: left;
      padding: 15px;
    }
  }
`;
