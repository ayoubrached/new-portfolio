import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Ayoub</span>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                to="/new-portfolio" 
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <button 
                                className="nav-link dropdown-toggle btn btn-link" 
                                id="projectsDropdown"
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Projects
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li>
                                    <NavLink to="/project1" className="dropdown-item">
                                        Project 1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project2" className="dropdown-item">
                                        Project 2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project3" className="dropdown-item">
                                        Project 3
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;