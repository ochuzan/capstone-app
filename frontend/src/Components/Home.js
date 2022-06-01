// import SingleTickerBTC from "./Widgets/SingleTickerBTC";
// import CryptoMarket from "./Widgets/CryptoMarket";
import SymbolOverview from "./Widgets/SymbolOverview";
import "./Home.css";

function Home() {
  
  return (
    <div id="chartContainer">
      <header>
        <h1 className="fade-in-image">Welcome to Crypto-Talk</h1>
        <h4 className="">Your education portal for crypto</h4>
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
      </div>
    </div>
  );
}

export default Home;
