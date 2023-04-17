import Button from '../shared/Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../auth/service';

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <div>
        {/* <img src={logo} alt="twitter-react" /> */}
        <Icon width="32" height="32" />
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
