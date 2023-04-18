import Button from '../shared/Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../auth/service';
import classNames from 'classnames';

import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          {/* <img src={logo} alt="twitter-react" /> */}
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/tweets/new">New Tweet</NavLink> |
        <NavLink to="/tweets" end>See latest tweets</NavLink>
          
        {isLogged ? (
          <Button onClick={handleLogoutClick} className="header-button">
            Logout
          </Button>
        ) : (
          <Link as={Button} to="/login" variant="primary" className="header-button">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
