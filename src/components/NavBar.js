import '../App.css';

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='navitem'>
                Ayoub
            </div>
            <div className='navbar'>
                <a className='navitem' href='/'>Home</a>
                <a className='navitem' href='/projects'>Projects</a>
                <a className='navitem' href='/contact'>Contact</a>
            </div>
        </div>
    );
}

export default NavBar;