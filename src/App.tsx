
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register'; // Adjust path as needed

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