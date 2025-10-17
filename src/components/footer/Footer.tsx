import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface FooterProps {
  settings: { footer_description?: string, contact_phone: string, contact_email: string, footer_twitter?: string, footer_facebook?: string, footer_instagram?: string, footer_linkedin?: string };
  isAuthenticated: boolean;
  appName?: string;
}

const Footer: React.FC<FooterProps> = ({
  settings,
  isAuthenticated,
  appName = 'AfriGuard',
}) => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="col-lg-5 col-md-6 footer-info">
              <img src="/public/favicon.png" alt="AfriGuard" style={{ width: '7rem', height: '7rem' }} />
              
              <p>{settings.footer_description ?? ''}</p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              {/* <h4> Home </h4> */}
              <ul>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> About us </a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> Contact us </a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> Contact us </a>
                </li>
                {isAuthenticated && (
                  <li>
                    <i className="fa fa-angle-right"></i>{' '}
                    <a href="/admin/home">Admin Panel</a>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <ul>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> Our Services </a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> Plan & Pricings </a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>{' '}
                  <a href="#"> Privacy policy </a>
                </li>
                {/* {!isAuthenticated && (
                  <li>
                    <i className="fa fa-angle-right"></i>{' '}
                    <a href="/login">Login</a>
                  </li>
                )} */}
                {isAuthenticated && (
                  <li>
                    <i className="fa fa-angle-right"></i>{' '}
                    <a href="/admin/home">Admin Panel</a>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h4> Contact Us </h4>
              <p>
                <strong> Phone: </strong> {settings.contact_phone}
                <br />
                <strong> Email: </strong> {settings.contact_email}
                <br />
              </p>

              <div className="social-links">
                <a href={settings.footer_twitter ?? ''} className="twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href={settings.footer_facebook ?? ''} className="facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href={settings.footer_instagram ?? ''} className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href={settings.footer_linkedin ?? ''} className="linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>{appName}</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by{' '}
          <a href="https://twitter.com/Praisebuka"> Praisebuka </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;