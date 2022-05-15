import { useEffect } from "react";

function SingleTickerBTC() {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
      script.async = true;
      script.innerHTML = JSON.stringify(
        {
          "symbol": "COINBASE:BTCUSD",
          "width": "350",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en"
        }
      )
      document.getElementById("ticker-container-btc").appendChild(script);
  }, []);
  return(
      <div id="ticker-container-btc">
      </div>
  )  
}

  export default SingleTickerBTC;