import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Blog from './components/Blog';
import About from './content/About';
import Home from './content/Home';
import Publications from './content/Publications';
import
{
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="App">
          <Navbar />
         </div>
         <hr></hr>
         <div className="Bottomcontainer"> 
             <Social />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path ="/blog">
                <Blog />
              </Route>
              <Route exact path ="/publications">
                <Publications />
              </Route>
          </div>
    </Router>

  );
}

export default App;
