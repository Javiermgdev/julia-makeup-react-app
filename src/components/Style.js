import styled from "styled-components";

export const AppStyle = styled.div`

  padding: 0;
  margin: 0;
`

//NAVIGATION BAR STYLE//

export const Navigation = styled.div`

*, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

.menu {
    background-color: pink;
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    box-shadow: 5px 0px 10px black;
}

.logo {
    color: white;
    font-size: 30px;
    padding: 0 50px;
    font-weight: bold;

}

.menu_items {
    display: flex;
    list-style: none;
    margin-right: 30px;
}

.menu_items li {
    border-radius: 3px;
    margin: 0 5px;
}

.menu_items li a {
    padding: 7px 13px;
    text-decoration: none;
    font-size: 18px;
    display: block;
    text-transform: uppercase;
    color: white;
}

.menu_items li:hover {
    background-color: rgba(184, 0, 240, .2);
    transition: .8s;
}

.button_menu {
    margin-right: 30px;
    font-size: 25px;
    color: white;
    cursor: pointer;
    display: none;
}

ul.show {
    top: 65px;
}

@media screen and (max-width: 952px) {
    .logo {
        font-size: 30px;
        padding-left: 35px;
    }
    .menu_items li a {
        font-weight: 16px;
    }
}

@media screen and (max-width: 858px) {
    .menu {
        height: 65px;
    }
    .button_menu {
        display: inline-flex;
    }
    .menu_items {
        position: fixed;
        width: 100vw;
        height: calc(100% - 65px);
        background: blueviolet;
        top: -100vh;
        text-align: center;
        transition: all .5s;
        flex-direction: column;
    }
    .menu_items li {
        margin: 30px 0 0 0;
        line-height: 30px;
    }
    .menu_items li:hover {
        background: none;
    }
    .menu_items li a {
        font-size: 20px;
        color:  white;
        font-weight: bold;
    }
    .menu_items li a:hover {
        color: rgba(184, 0, 240);
    }
    .logo {
        font-size: 25px;
        padding-left: 35px;
    }
}

@media screen and (max-width: 858px) and (orientation: landscape) {
    .menu_items li {
        margin: 5px 0 0 0;
    }
    .menu_items {
        overflow: scroll;
        height: calc(100% - 65px);
    }
}
  
`

//FORM STYLE//

export const Form = styled.div`
*{
  margin: 0px auto;
  padding: 0;
  box-sizing: border-box;
}

display: grid;
align-items: center;
background-color: blueviolet;


.form-register {
  width: 400px;
  background-color: pink;
  padding: 30px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 0px;
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

//FOOTER STYLE//

export const Footer = styled.div`

  
.footer {
    background-color: pink;
    height: 70px;
    width: 100vw;
    display: flex;
    
    align-items: center;
    border-bottom: 1px solid white;
    box-shadow: 5px 0px 10px black;
    
}
  
.footer_items {
    display: flex;
    list-style: none;
    margin-right: 30px;
    
}
  
.footer_items li {
    border-radius: 3px;
    margin: 0 5px;
}

.footer_items li a {
    padding: 7px 13px;
    text-decoration: none;
    font-size: 18px;
    display: block;
    text-transform: uppercase;
    color: white;
}

.footer_items li:hover {
    background-color: rgba(184, 0, 240, .2);
    transition: .8s;
}


`
//MAIN IMAGE STYLE//

export const MainImageStyle = styled.div`
      
      display: grid;
      grid-template-columns: repeat(2, 50%);
      background-color: #fcf1f1;
      margin-top: 0px;
      height: 400px;
      align-items: center;
      //align-content: center;
      //align-self: center;
      img{
        margin: auto;
        padding: 0px;
        width: 750px;
        
        
      }
 `

//IMAGES COLLECTION STYLE//

 export const ImagesCollectionStyle = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 33%);
      justify-content: center;
      background-color: #fcf1f1;
      border: 5px solid blueviolet;
      img{
        margin: 10px auto;
        height: 300px;
        border: 2px solid blueviolet;
        border-radius: 4px;
      }



 `

//CONTENT STYLE//

export const ContentStyle = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%); 

`

