import { useEffect } from "react";

const CryptoMarket = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        "width": "500px",
        "height": "900px",
        "margin": "0 auto",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "locale": "en",
        "colorTheme": "dark",
        "isTransparent": true
      }
    )
    document.getElementById("market-container").appendChild(script);
  }, []);
    return(
        <div id="market-container">
        </div>
    )
}

export default CryptoMarket;