import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/js/dist/modal.js';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Accueil from './components/Pages/Accueil';
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login';
import Logout from './components/Admin/Logout';
import Footer from './components/Footer/Footer';
import Presetation from './components/Pages/Presentation';
import Contact from './components/Pages/Contact';
import Page404 from './components/Pages/Page404';

const authenticate = ()=>{
  const d = new Date();
  const test = d.toLocaleDateString();
  if(test === sessionStorage.getItem('token')){
     return true; 
  }else{
      return false;
  }
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Presentation" exact component={Presetation} />
          <Route path="/Contact" exact component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Redirect  from='/Admin/reload' to="/Admin" />
                    <Route path='/Admin' render={()=>(
                        authenticate()
                        ?(<Admin />)
                        :(<Redirect to="/login"/>)
                    )}  />
          <Route path="*" exact component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
