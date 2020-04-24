import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import About from './About';
import Contact from './components/Contact';
import Blog from './components/Blog/Blog';

class App extends Component {
  render() {
    return (

      <React.Fragment>

       <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/store" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route component={Default}/>
         </Switch>

      </React.Fragment>
    );
  }
}

export default App;
