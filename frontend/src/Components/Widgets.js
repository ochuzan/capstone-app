import { useEffect } from "react";

function Widgets(){

    useEffect(() => {
        const chartScript = document.createElement('chartScript');
          chartScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
          chartScript.async = true;
          chartScript.innerHTML = JSON.stringify(
            {
              "symbol": "BITSTAMP:BTCUSD",
              "width": "100%",
              "colorTheme": "dark",
              "isTransparent": false,
              "locale": "en"
            }    
    )
     document.getElementById("chartContainer").appendChild(chartScript);
      }, [])
      return(
          <div id="chartContainer">
              {/* <div className="tradingview-widget-container"> */}
              {/* </div> */}
          </div>
      )  
}

export default Widgets

  