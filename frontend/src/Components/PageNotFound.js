import { Link } from "react-router-dom";

function PageNotFound() {
    return (
      <div className="page-not-found">
        <h1> Page Not found</h1>
        <Link to="/"><h1>Back Home</h1></Link>
      </div>
    );
  }
  
  export default PageNotFound;