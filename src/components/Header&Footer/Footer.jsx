import React from 'react';
import styled from 'styled-components';
function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container'>
          <div className='row'>
            {/* col 1 */}
            <div className='col-md-3 col-sm-6'>
              <h4>lorem ipsm</h4>
              <ul className='list-unstyled'>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            {/* col 1 */}
            <div className='col-md-3 col-sm-6'>
              <h4>lorem ipsm</h4>
              <ul className='list-unstyled'>
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
            {/* col 1 */}
            <div className='col-md-3 col-sm-6'>
              <h4>lorem ipsm</h4>
              <ul className='list-unstyled'>
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
            {/* col 1 */}
            <div className='col-md-3 col-sm-6'>
              <h4>lorem ipsm</h4>
              <ul className='list-unstyled'>
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
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} TouristGuide App - All Rights
              Reserved
            </p>
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
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
    text-decoration: none;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
