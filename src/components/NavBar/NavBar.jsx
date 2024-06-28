import "./NavBar.css";
import logo from '../../assets/white_tesla.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        {/* <img src={logo} className="app_logo" alt="logo"/> CYBER-TRUCK */}CYBER-TRUCK
      </div>
      <ul className="nav-menu">
      <li>
          <a href="/">
            <button>Home</button>
          </a>
        </li>
        <li>
          <Link to="/explore">
            <button>Explore</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="nav-contact">Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
