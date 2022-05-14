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


function App() {
  return (
    <Router>
      <NavBar/>
      <Popchat />
      {/* <Bot /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/edit-profile" element={<ProfileEdit />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
