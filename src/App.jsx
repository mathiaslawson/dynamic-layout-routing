import { Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import LayoutWrapper from "./layout";
import AllRoutes from "./layout/Rotues";

function App() {
  return (
    <>
      <Router>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
          <i>
            (Click on the buttons bellow to access the different page layouts)
          </i>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link to="/">
            <button>Landing Page</button>
          </Link>
          <Link to="/chat">
            <button>Chat Page</button>
          </Link>
          <Link to="/auth">
            <button>Auth Page</button>
          </Link>
        </div>

        <LayoutWrapper allroutes={AllRoutes} />
      </Router>
    </>
  );
}

export default App;
