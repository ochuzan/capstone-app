import { useEffect } from "react";

function Home() {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
      script.async = true;
      script.innerHTML = JSON.stringify(
        {
          "symbol": "COINBASE:BTCUSD",
          "width": "100%",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en"
        }
      )
      document.getElementById("chartContainer").appendChild(script);
  }, []);
  return(
      <div id="chartContainer">
          {/* <div className="tradingview-widget-container"> */}
          {/* </div> */}
      </div>
  )  
}

  export default Home;

