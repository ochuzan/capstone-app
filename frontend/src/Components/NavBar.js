import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
      <nav id="nav" className="navbar">
          <h3><Link to="/news"> News</Link></h3>
          <h3><Link to="/">Welcome to the Crypto Chat App</Link></h3>
          <h3><Link to="/education">Education</Link></h3>
      </nav>
    );
  }
  
  export default NavBar;