import { NavLink, Switch, Route } from 'react-router-dom';
import Nav from './Nav'

const Header = () => {
    return (
        <header>
            <h1>Animal App</h1>
            <Nav />
        </header>
    );
};

export default Header;