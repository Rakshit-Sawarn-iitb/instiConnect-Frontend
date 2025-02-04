import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register'; // Adjust path as needed
// import { profile } from "./assets/dummy";
// import BlogCard from "./components/BlogCard";
// import PeopleYouMayKnow from "./components/peopleYouMayKnow";
// import ProfilePage from "./components/profilePage";
// import ConnectButton from "./components/shared/connectButton";
// import Navbar from "./components/Navbar";
// import Logo from "./components/Shared/Logo.tsx";
// import Startblog from "./components/startblog.tsx";
// import TalkBlog from "./components/Talkblog.tsx";
// import Postbutton from "./components/Shared/Postbutton.tsx";
// import Trendingtopics from "./components/Trendingtopics.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add route for the Register page */}
        <Route path="/register" element={<Register />} />
        {/* You can add other routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;