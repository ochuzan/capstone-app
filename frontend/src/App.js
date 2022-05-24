import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";

// Users Components - Admin
import UsersAdmin from "./Components/UserProfile/UsersAdmin";
import UserEditAdmin from "./Components/UserProfile/UserEditAdmin";
import UserDetailsAdmin from "./Components/UserProfile/UserDetailsAdmin";
// Users Components - For User
import UserCreate from "./Components/UserProfile/UserCreate";
import UserLogin from "./Components/UserProfile/UserLogin";

// News Articles and Videos Components
import News from "./Components/News";
import NewsPage from "./Components/NewsPage"
import Cryptocurrency from "./Components/Cryptocurrency";
import Education from "./Components/Education";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Videos from "./Components/Videos"
import Video from "./Components/Video";

// Chatbot Components
import Bot from "./Components/ChatBot/Bot";
import Popchat from "./Components/ChatBot/Popchat";
import AlanBot from "./Components/ChatBot/AlanBot"

import MuiSandbox from "./Components/MuiSandbox";

function App() {
  return (
    <Router>
      <Header />
      <NavBar/>
      <Routes>
        {/* <Route path="/sandbox" element={<MuiSandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="videos" element={<Videos />} />
        <Route path="/videos/:id" element={<Video />} />

        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users" element={<UsersAdmin />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route exact path="/users/:id" element={<UserDetailsAdmin />} />
        <Route path="/users/:id/edit" element={<UserEditAdmin />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* <AlanBot /> */}
      {/* <Popchat /> */}
    </Router>
  );
}

export default App;
