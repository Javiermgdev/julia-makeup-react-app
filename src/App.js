import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Form from './components/Form';
import MainImage from './components/MainImage'
import ImagesCollection from './components/ImagesCollection'
import ContentComponent from "./components/Content";
import LogIn from './components/LogIn';
import { AppStyle } from "./components/Style";
import Nav from "./components/Nav";
//import MenuSlider from './components/MenuSlider';//
import Indexcomponent from "./components/IndexComponent"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {

  return (
    <AppStyle className="App">
      {/* <NavigationBar>
        
        
      </NavigationBar> */}
      <Router>
      <Nav/>
      <Switch>
      <Route path="/" exact component = {Indexcomponent}/> 
      <Route path = "/contacto" component = {Form}/>
      <Route path = "/galeria" component = {Indexcomponent}/>
      <Route path = "/login" component = {Indexcomponent}/>
        
      </Switch>
      </Router>
      
      
      <Footer></Footer>
      <LogIn></LogIn>
      
      
    </AppStyle>
  );
}

export default App;
