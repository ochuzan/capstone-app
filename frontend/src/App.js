import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import PageNotFound from "./Components/PageNotFound";
import News from "./Components/News";
// import Bot from "./Components/ChatBot/Bot";
import Popchat from "./Components/ChatBot/Popchat";
import Articles from "./Components/Articles";
import Article from "./Components/Article";


function App() {
  return (
    <Router>
      <Footer />
      <NavBar/>
      {/* <Bot /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Popchat />
    </Router>
  );
}

export default App;
