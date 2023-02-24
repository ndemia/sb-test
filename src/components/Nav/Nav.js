import './nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        Home
      </NavLink>
      <NavLink to="/blog" className="nav__link">
        Blog
      </NavLink>
    </nav>
  );
}
