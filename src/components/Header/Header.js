import './header.css';
import { useLocation } from 'react-router-dom';
import companyLogo from '../../assets/images/sb-logo.svg';
import Nav from '../Nav/Nav';
import MainTitle from '../MainTitle/MainTitle';

export default function Header() {
  let location = useLocation();
  let title = '';

  // If location is not Home, show the title
  if (location.pathname !== '/') {
    title = location.pathname.slice(1);
  }

  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__navigation-wrap">
          <figure className="header__logo-wrapper">
            <img className="header__logo" src={companyLogo} alt="Social Brothers logo" />
          </figure>
          <Nav />
        </div>
        {title && <MainTitle title={title} />}
      </header>
    </div>
  );
}
