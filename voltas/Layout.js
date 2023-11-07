import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "./logo.png";
import logo2 from "./logo2.png";
const Layout = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-btn"> About </span>
            <div className="dropdown-content">
              <Link to="/about/overview"> Overview </Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-btn"> Businesses </span>
            <div className="dropdown-content">
              <Link to="/businesses/products">AC, Cooling and CR Products</Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-btn"> Investors </span>
            <div className="dropdown-content">
              <Link to="/investors/stock"> Stock Information </Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-btn"> Sustainability </span>
            <div className="dropdown-content">
              <Link to="/sustainability/overview"> Overview </Link>
            </div>
          </li>
        </ul>
        <img src={logo2} alt="logo2" />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
