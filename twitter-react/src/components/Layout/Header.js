import Button from '../shared/Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../auth/service';
import classNames from 'classnames';

import './Header.css';

const Header = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className={classNames('header', className)}>
      <div className="header-logo">
        {/* <img src={logo} alt="twitter-react" /> */}
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        {isLogged ? (
          <Button onClick={handleLogoutClick} className="header-button">
            Logout
          </Button>
        ) : (
          <Button variant="primary" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
