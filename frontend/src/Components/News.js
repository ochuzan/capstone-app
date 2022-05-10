import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function News() {
  const [symbols, setSymbols] = useState([]);

  useEffect(()=>{
    axios.get(``)
    .then((res)=>{
      setSymbols(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  let symbolList = symbols.map((symbol, index)=>{
    return(
      <div key={index}>
        <div>{symbol}</div>
      </div>
    )
  })
    return (
      <div className="News">
        <h1>News</h1>
        {symbolList}
      </div>
    );
  }
  
  export default News;