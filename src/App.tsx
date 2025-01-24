/*import Navbar from "./components/Navbar";
import Logo from "./components/Shared/Logo.tsx";

function App() {
  return <Navbar />;
  
}

export default App;
*/

import Navbar from "./components/Navbar";
import Logo from "./components/Shared/Logo.tsx";
import Startblog from "./components/startblog.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div>
        <Startblog />
      </div>
    </>
  );
}

export default App;
