import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";

// Users Components
import Profiles from "./Components/UserProfile/Profiles";
import ProfileCreate from "./Components/UserProfile/ProfileCreate";
import ProfileEdit from "./Components/UserProfile/ProfileEdit";
import ProfileDetails from "./Components/UserProfile/ProfileDetails";
import ProfileLogin from "./Components/UserProfile/ProfileLogin";

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

        <Route path="/login-profile" element={<ProfileLogin />} />
        <Route path="/users" element={<Profiles />} />
        <Route path="/users/new" element={<ProfileCreate />} />
        <Route exact path="/users/:id" element={<ProfileDetails />} />
        <Route path="/users/:id/edit" element={<ProfileEdit />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* <AlanBot /> */}
      {/* <Popchat /> */}
    </Router>
  );
}

export default App;
