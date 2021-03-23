import "../style/App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./Navigation";
import Logo from "./Logo";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav> {<Navigation />}</nav>
        <div className="logo">{<Logo />}</div>
        <main>{<Main />}</main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
};
export default App;
