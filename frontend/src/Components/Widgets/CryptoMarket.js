import { useEffect } from "react";

const CryptoMarket = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    script.async = true;
    script.innerHTML = JSON.stringify(
        {
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en",
        // "isTransparent": true
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