import { Link } from "react-router-dom"

function NavBar() {
    return (
      <nav id="nav" className="navbar">
          <h3><Link to="/news"> News</Link></h3>
          <h3>Welcome to the Crypto Chat App</h3>
          <h3><Link to="/videos">Videos</Link></h3>
      </nav>
    );
  }
  
  export default NavBar;