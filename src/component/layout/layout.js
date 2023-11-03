import { Outlet, Link } from "react-router-dom";
import News from "../news/News";
import Contact from "../contact/Contact";
import './layout.css';

const Layout = () => {
  return (
    <>
    <div className="laytp">
      <nav>
        <ul>
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Outlet />
      
    </>
  )
};

export default Layout;
