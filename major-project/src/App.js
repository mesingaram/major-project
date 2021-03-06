import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
//import Navbar_below from './components/Navbar/Navbar_below';
import NavbarTop from './components/Navbar/NavbarTop';
import Insurance from './components/page/Insurance';
import Contact from './components/page/Contact';
import Billpayment from './components/page/Billpayment';
import FindLocation from './pages/FindLocation/FindLocation'
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Appointment from './pages/Appointment/Appointment';
import PatientInfo from './pages/PatientInfo/PatientInfo'
import TheraphyServices from './pages/TheraphyServices/TheraphyServices';
import about from './pages/about/about';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavbarTop />
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/find-location' exact component={FindLocation} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/new-patient-information' component={PatientInfo} />
        <Route path='/Insurance' exact component={Insurance} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Billpayment' component={Billpayment} />
        <Route path='/disclaimer' component={Disclaimer} />
        <Route path='/about-ati' component={about} />
        <Route path='/therapy-services' component={TheraphyServices} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
