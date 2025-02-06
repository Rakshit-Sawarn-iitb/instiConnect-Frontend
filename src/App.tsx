import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register'; // Adjust path as needed
<<<<<<< HEAD
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from './components/login';

=======
import { profile } from "./assets/dummy";
import BlogCard from "./components/BlogCard";
import PeopleYouMayKnow from "./components/peopleYouMayKnow";
import ProfilePage from "./components/profilePage";
import ConnectButton from "./components/shared/connectButton";
import Navbar from "./components/Navbar";
import Logo from "./components/Shared/Logo.tsx";
import Startblog from "./components/startblog.tsx";
>>>>>>> 24f547ad669b2493c90c2b33f32d106f6571e175

function App() {
  return (

    <Router>
      <Routes>
        {/* Add route for the Register page */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* You can add other routes as needed */}
      </Routes>
    </Router>


export default App;