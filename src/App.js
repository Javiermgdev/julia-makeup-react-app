import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Form></Form>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
