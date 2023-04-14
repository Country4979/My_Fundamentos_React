import Button from '../shared/Button'

import logo, { ReactComponent as Icon } from '../../assest/twitter.svg';

const Header = ({isLogged}) => {
    return (
        <header>
            <div>
                <img src={logo} alt="tweeter log"></img>
                <Icon width="32" heig="32">Login</Icon>
            </div>
            <nav>
                {isLogged ? (
                    <Button>Logout</Button>
                ) : (
                <Button variant="primary">Login</Button>
                )};
            </nav>
        </header>
    );
};

export default Header