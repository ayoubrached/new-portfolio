import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='navitem'>
                Ayoub
            </div>
            <div className='navbar'>
                <NavLink 
                    to="/" 
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none',
                        textDecorationColor: isActive ? 'blue' : 'inherit',
                        textUnderlineOffset: isActive ? '10px' : '0'
                    })}
                    className="navitem"
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/projects" 
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none',
                        textDecorationColor: isActive ? 'blue' : 'inherit',
                        textUnderlineOffset: isActive ? '10px' : '0'
                    })}
                    className="navitem"
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/contact" 
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none',
                        textDecorationColor: isActive ? 'blue' : 'inherit',
                        textUnderlineOffset: isActive ? '10px' : '0'
                    })}
                    className="navitem"
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
