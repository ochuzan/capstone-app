import { Link , useParams } from "react-router-dom";
import videos from "./VideoData";

function Video(){
    const{ id } = useParams();
    let links = videos.map((vid, index)=>{
        return(
            <li className="links"> <Link to={`/videos/${index}`}><h3 className="">{vid.title}</h3></Link></li>
        )
    })
    return(
        <div className="video-container">
            <h1>{videos[id].title}</h1>
            <article id="article">
            <ul className="vid-container">{links}</ul>
            <div className="vid-container">
            <iframe id="inlineFrame"           
                title={videos[id].title}
                width="1200"
                height="750"
                src={`https://www.youtube.com/embed/${videos[id].videoId}`}>
            </iframe>
            </div>
            {/* <div className="vid-container"><h3> Favorite {videos[id].is_favorite ? "💰 yes" : "📈 no"}</h3></div> */}
            </article>
        </div>
    )
}

export default Video