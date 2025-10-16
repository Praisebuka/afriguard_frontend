import "./header.styles.scss";
import React from 'react';

interface HeaderProps {
  currentRouteName: string;
  appName?: string;
  route: (name: string) => string;
}

const Header: React.FC<HeaderProps> = ({ currentRouteName, appName = 'AfriGuard', route }) => {
  const isHome = currentRouteName === 'home';
  const baseRoute = isHome ? '' : route('home');

  return (
    <header id="header" className={!isHome ? 'header-fixed' : undefined}>
      <div className="container" style={{ maxWidth: '1500px' }}>
        <div id="logo" className="pull-left">
          <h1 style={{ textTransform: 'none' }}>
            <a href={`${route('home')}#intro`}>
              <span><i className="fa fa-shield" aria-hidden="true"></i></span>
              {appName}
            </a>
          </h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><a href={`${baseRoute}#about`}> About </a></li>
            <li><a href={`${baseRoute}#pricing`}> Plans & Pricing </a></li>
            <li><a href={`${baseRoute}#features`}> Services </a></li>
            <li><a href={`${baseRoute}#contact`}> Contact Us </a></li>
            <li className="buy-tickets"><a href={`${baseRoute}login`}> Login </a></li>
            {/* <li className="buy-tickets"><a href={`${baseRoute}register`}> Register </a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;