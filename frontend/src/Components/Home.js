import SingleTickerBTC from "./Widgets/SingleTickerBTC";
import SymbolOverview from "./Widgets/SymbolOverview";
import CryptoMarket from "./Widgets/CryptoMarket";

import "./Home.css";

function Home() {
  return (
    <div id="chartContainer">
      <header>
        <h1 className="fade-in-image">Welcome to Crypto-Talk</h1>
        <h4 className="fade-in">Your education portal for crypto</h4>
      </header>
      <div id="chart-coins-container">
        <div id="chart-widget">
          <h4>CRYPTO CHARTS</h4>
          {/* <SingleTickerBTC /> */}
          <SymbolOverview />
          {/* <div id="chart">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/1200px-Pushkin_population_history.svg.png"
              alt="chart"
            />
          </div> */}
        </div>
        {/* <div id="top-coins">
          <header><h4>Top Coins</h4></header>
           <div id="coins-list">
          <CryptoMarket />
            {/* /* <div id="coin">DEBCOIN</div>
            <div id="coin">OLIVERCOIN</div>
            <div id="coin">CHRISTINEUM</div>
            <div id="coin">MILTONERIUM</div>
            <div id="coin">BITCOIN</div>
            <div id="coin">GRRRRCOIN</div>
            <div id="coin">CARDANO</div>
            <div id="coin">RUBENCOIN</div>
            <div id="coin">LITECOIN</div>
            <div id="coin">STELLAR</div>
            <div id="coin">ETHEREUM</div>
            <div id="coin">DOGECOIN</div> */}
          {/* </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
}

export default Home;
