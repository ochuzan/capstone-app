import { Link , useParams } from "react-router-dom";

function Video({videosData}){
    const{ id } = useParams();
    let links = videosData.map((vid, index)=>{
        return(
            <li className="links"> <Link to={`/videos/${index}`}><h3 className="">{vid.name}</h3></Link></li>
        )
    })
    return(
        <div className="video-container">
            <h1>{videosData[id].name}</h1>
            <article id="article">
            <ul className="vid-container">{links}</ul>
            <div className="vid-container">
            <iframe id="inlineFrame"           
                title={videosData[id].title}
                width="850"
                height="700"
                src={`${videosData[id].url}`}>
            </iframe>
            </div>
            {/* <div className="vid-container"><h3> Favorite {videos[id].is_favorite ? "💰 yes" : "📈 no"}</h3></div> */}
            </article>
        </div>
    )
}

export default Video