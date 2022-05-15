import Articles from "./Articles";
import Video from "./Video";
import "./Education.css"
function Education() {


    return (
      <div id="Education">
        <h1>Education</h1>
        <button>Articles / Videos</button>
        <Articles />
        <Video />
      </div>
    );
  }
  
  export default Education;