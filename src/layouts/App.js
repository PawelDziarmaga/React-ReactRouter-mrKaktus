import '../style/App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from "./Navigation";
import Logo from "./Logo";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  

  render() { 
    return ( 
      <Router>
      <div className="app">
        <nav>
          {<Navigation />}
        </nav>

        <div className="logo">
          {<Logo />}
        </div>

        <main>
          {<Main />}
        </main>

        <footer>
          {<Footer />}
        </footer>
      </div>
      </Router>

     );
  }
}
 
export default App;