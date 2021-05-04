import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer   } from './components';
//import Navbar_below from './components/Navbar/Navbar_below';
import NavbarTop from './components/Navbar/NavbarTop';
import Insurance from './components/page/Insurance';
import Contact from './components/page/Contact';
import Billpayment from './components/page/Billpayment';
import FindLocation from './pages/FindLocation/FindLocation'
import Disclaimer from './pages/Disclaimer/Disclaimer';

function App() {
  return (
    <Router>
      <GlobalStyle />      
      <NavbarTop />  
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/find-location' exact component={FindLocation} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Insurance' exact component={Insurance} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Billpayment' component={Billpayment} />
        <Route path='/disclaimer' component={Disclaimer}/>      
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
