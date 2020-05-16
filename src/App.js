import React from 'react';
import './App.css';
import Header from './components/Header&Footer/Header';
import Footer from './components/Header&Footer/Footer';
//react-router-dom
import { Switch, Route } from 'react-router-dom';
//import pages
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Details from './components/pages/Details';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/details' component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
