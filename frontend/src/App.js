import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Cryptocurrency from "./Components/Cryptocurrency";
import Profile from "./Components/Profile";
import ProfileCreate from "./Components/ProfileCreate";
import ProfileEdit from "./Components/ProfileEdit";
import Education from "./Components/Education";
import PageNotFound from "./Components/PageNotFound";
import News from "./Components/News";
// import Bot from "./Components/ChatBot/Bot";
import Popchat from "./Components/ChatBot/Popchat";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import TickerTape from "./Components/Widgets/TickerTape";


function App() {
  return (
    <Router>
      <Footer />
      <NavBar/>
      {/* <Bot /> */}
      <TickerTape />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/edit-profile" element={<ProfileEdit />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Popchat />
    </Router>
  );
}

export default App;
