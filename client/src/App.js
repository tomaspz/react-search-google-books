import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Jumbotron from './components/Shared/Jumbotron';
import Search from './containers/Search/Search';
import Library from './containers/Library/Library';

function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/library" component={Library} />
      <Footer />
    </Router>
  );
}

export default App;
