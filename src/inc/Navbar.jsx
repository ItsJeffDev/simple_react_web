import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: `linear-gradient(to right, #31476c, #6767e0ff)` }}>
            <div className="container-fluid">
                <img className='navbar-brand ms-3' src='src/images/logo.png' alt='LOGO' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light me-4 shadow fw-bold" style={{ textShadow: '0 0 2px #fff, 0 0 5px #fff, 0 0 5px #31476c, 0 0 5px #31476c', fontFamily: 'sans-serif' }} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-light me-4 shadow fw-bold" style={{ textShadow: '0 0 2px #fff, 0 0 5px #fff, 0 0 10px #31476c, 0 0 10px #31476c' }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link text-light shadow fw-bold" style={{ textShadow: '0 0 2px #fff, 0 0 5px #fff, 0 0 10px #31476c, 0 0 10px #31476c' }}>Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex ms-5">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;