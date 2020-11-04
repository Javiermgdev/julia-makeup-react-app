import styled from "styled-components";


export const AppStyle = styled.div`

  padding: 0;
  margin: 0;
`

export const Navigation = styled.div`
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
  
  
  body{
    
    padding: 0;
    margin:0;
  
  }
  
  .navigationBar{
    width: 1100px;
    margin: 0px auto;
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
    background: blueviolet;
    color: white;
    transition: all .6s;
  }
  
  border: 2px solid blue;
  margin: 0px;
  padding: 0px;
  
`
export const Form = styled.div`
*{
  margin: 0px auto;
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

export const Footer = styled.div`
margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: blueviolet;
  
  .footer{
    width: 1100px;
    margin: 0px auto;
    
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
    background: blueviolet;
    color: white;
    transition: all .6s;
  }


`

export const MainImageStyle = styled.div`
      
      border: 2px solid black;
      margin-top: 0px;
      img{
        margin: 0px;
        padding: 0px;
        width: 1100px;
      
      
      }
 `
 export const ImagesCollectionStyle = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 33%);
      justify-content: center;
      background-color: #fcf1f1;
      img{
        margin: 10px auto;
      height: 300px;
      border: 8px solid blueviolet;
      border-radius: 4px;
      }



 `

export const ContentStyle = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%);   
`

