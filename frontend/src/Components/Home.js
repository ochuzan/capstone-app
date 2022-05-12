import { useEffect } from "react";
import "./Home.css";

function Home() {
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
        <header>
          <h1>Welcome to App-Name.com</h1>
          <h4>your education portal for crypto</h4>
          <hr />
        </header>
        <div id="chatbot">
          Chatbot
        </div>
        <div id="chart-coins-container">
          <div id="chart-widget">
            BTC Chart or Crypto Market widget
          </div>
          <div id="top-coins">
            Top Coins
          </div>
        </div>
      </div>
  )  
}

  export default Home;

