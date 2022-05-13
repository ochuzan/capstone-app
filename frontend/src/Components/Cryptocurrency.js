import "./Cryptocurrency.css"
import { useEffect } from "react";

const Cryptocurrency = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        "width": "100%",
        // "height": "100%",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en"
      }
    )
    document.getElementById("chartContainer").appendChild(script);
  }, []);
    return(
      <div id="cryptocurrency">
        <h1>Cryptocurrency</h1>
        <div id="chartContainer"></div>
      </div>
    )
}

export default Cryptocurrency;