import { Link , useParams } from "react-router-dom";
import videos from "./VideoData";

function Video(){
    const{ id } = useParams();
    let links = videos.map((vid, index)=>{
        return(
            <li> <Link to={`/videos/${index}`}><h3 className="hvr-grow">{vid.title}</h3></Link></li>
        )
    })
    return(
        <div>
            <h1>{videos[id].title}</h1>
            <article id="article">
            <ul className="vid-container">{links}</ul>
            <div className="vid-container">
            <iframe id="inlineFrame"           
                title={videos[id].title}
                width="800"
                height="750"
                src={`https://www.youtube.com/embed/${videos[id].videoId}`}>
            </iframe>
            </div>
            <div className="vid-container"></div>
            </article>
        </div>
    )
}

export default Video