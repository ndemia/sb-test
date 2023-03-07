import './header.css';
import { useLocation } from 'react-router-dom';
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
          <Nav />
        </div>
        {title && <MainTitle title={title} />}
      </header>
    </div>
  );
}
