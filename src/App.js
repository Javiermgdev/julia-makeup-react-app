import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import MainImage from './components/MainImage'
import ImagesCollection from './components/ImagesCollection'
import ContentComponent from "./components/Content";
import LogIn from './components/LogIn';
import { AppStyle } from "./components/Style";
import Nav from "./components/Nav";
import Indexcomponent from "./components/IndexComponent"
import AddImages from "./components/AddImagen"
import Getimages from "./components/getImagesAdmin";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ImagesGallery from './components/ImagesGallery';



function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <AppStyle className="App">
     
      <Router>

      <Nav/>
      <Switch>
      <Route path="/" exact component = {Indexcomponent}/> 
      <Route path = "/contacto" component = {Form}/>
      <Route path = "/galeria" component = {Indexcomponent}/>
      <Route path = "/login" component = {LogIn}/>
        
      </Switch>
      </Router>
      <AddImages/>
      <Getimages/>
      
      <ImagesGallery></ImagesGallery>
      
      <Footer></Footer>
      
      
      
    </AppStyle>
  );
}

export default App;
