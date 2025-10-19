import { Link } from 'react-router-dom';
import "../style/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ background: `linear-gradient(to right, #31476c, #6767e0ff)` }}>
            <div className="container-fluid">
                <img className='navbar-brand ms-3' src='src/images/logo.png' alt='LOGO' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <div class="dropdown nav-link text-light me-3 shadow text-center">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{color: `white`, fontFamily: `serif`}}>
                                    Properties
                                </button>
                                <ul className="drop_it dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light me-3 shadow text-center" style={{ fontFamily: `serif`, fontSize: `1.2rem` }} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-light me-3 shadow text-center" style={{ fontFamily: `serif`, fontSize: `1.2rem` }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link text-light me-3 shadow text-center" style={{ fontFamily: `serif`, fontSize: `1.2rem` }}>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <div class="dropdown nav-link text-light me-3 shadow text-center">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{color: `white`, fontFamily: `serif`}}>
                                    Tour
                                </button>
                                <ul className="drop_it dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex ms-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className=" justi btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;