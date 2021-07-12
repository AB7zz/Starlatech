import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
const Pricing = React.lazy(() => import('./pages/Packages')) ;
const ContactForm = React.lazy(() => import('./pages/ContactForm')) ;
const Privacy = React.lazy(() => import('./pages/PrivacyPolicies')) ;
const Careers = React.lazy(() => import('./pages/Careers/App.js'));
const Terms = React.lazy(() => import('./pages/Terms'));



function App() {
  return (
    <Router>
        <Switch>
            <React.Suspense fallback={
            <div class="spinner-wrapper">
              <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
              </div>
            </div>}
            >
              <Route path='/' component={Home} exact/>
              <Route path='/contactform' component={ContactForm} exact/>
              <Route path='/privacy' component={Privacy} exact/>
              <Route path='/pricing' component={Pricing} exact/>
              <Route path='/careers' component={Careers} exact/>
              <Route path='/terms' component={Terms} exact/>
            </React.Suspense>
        </Switch>
    </Router>
  );
}

export default App
  




