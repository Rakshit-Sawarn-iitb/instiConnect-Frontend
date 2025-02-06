
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register'; // Adjust path as needed
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from './components/login';


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
  );
}


export default App;