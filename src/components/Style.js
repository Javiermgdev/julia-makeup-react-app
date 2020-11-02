import styled from "styled-components";


export const Navigation = styled.div`
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  
  
  body{
    background-color: blueviolet;
  
  }
  
  .navigationBar{
    width: 1000px;
    margin: 30px auto;
    margin-bottom: 0px;
    background-color: pink;
  }
  
  .navigationBar ul{
    list-style: none;
  }
  
  .menu > li{
    position: relative;
    display: inline-block;
  
  }
  
  .menu > li > a{
    display: block;
    padding: 15px 20px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
  
  .menu li a:hover{
    color: red;
    transition: all .6s;
  }
  
  .submenu{
    position: absolute;
    background: violet;
    width: 150%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;
  }
  
  .submenu li a{
    display: block;
    padding: 15px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
  
  .menu li:hover .submenu{
    visibility: visible;
    opacity: 1;
  }
`
export const Form = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

background-color: blueviolet;

.form-register {
  width: 400px;
  background-color: pink;
  padding: 30px;
  margin: auto;
  margin-top: 0px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  box-shadow: 10px 15px 37px #000;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: blueviolet;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
  border: 1px solid pink;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: white;
}

.form-register .butom {
  width: 100%;
  background: blueviolet;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}
`

export const Footer = styled.div`
margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  
  .footer{
    width: 1000px;
    margin: 30px auto;
    background-color: pink;
  }
  
  .footer ul{
    list-style: none;
  }
  
  .menufooter > li{
    position: relative;
    display: inline-block;
  
  }
  
  .menufooter > li > a{
    display: block;
    padding: 15px 20px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
  
  .menufooter li a:hover{
    color: red;
    transition: all .6s;
  }
`

