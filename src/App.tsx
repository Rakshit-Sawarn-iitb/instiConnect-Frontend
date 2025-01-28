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
import TalkBlog from "./components/Talkblog.tsx";
import Postbutton from "./components/Shared/Postbutton.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div>
        <Startblog />
      </div>
      <div>space</div>
      <div>
        <TalkBlog />
      </div>
      <div>space</div>
    </>
  );
}

export default App;
