import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Form from './components/Form';
import MainImage from './components/MainImage'
import ImagesCollection from './components/ImagesCollection'
import ContentComponent from "./components/Content";
import { AppStyle } from "./components/Style";
//import MenuSlider from './components/MenuSlider';//



function App() {

  return (
    <AppStyle className="App">
      <NavigationBar>
        
      </NavigationBar>
      <MainImage></MainImage>
      {/* <Form></Form>
      <ImagesCollection></ImagesCollection> */}
      <ContentComponent/>
      <Footer></Footer>
      
      
    </AppStyle>
  );
}

export default App;
