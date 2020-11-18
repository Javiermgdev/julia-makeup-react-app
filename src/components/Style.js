import styled from "styled-components";

export const AppStyle = styled.div`

  padding: 0;
  margin: 0;
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
background-color: rgba(163, 66, 253, 0.836);


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
  background: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
  border: 1px solid pink;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: gray;
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

//LOGIN STYLE//

export const LogInStyle = styled.div`

display: grid;
align-items: center;
background-color: rgba(163, 66, 253, 0.836);

.LogIn-Admin{
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

.LogIn-Admin h4{
  font-size: 22px;
  margin-bottom: 20px;
}

.User, .Password{
  width: 80%;
  background: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 16px;
  border: 1px solid pink;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: gray;
}

.LogIn-Admin .button{
  width: 100%;
  background: blueviolet;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
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
        height: 200px;
        width: 200px;
        border: 2px solid blueviolet;
        border-radius: 4px;
      }



 `

//CONTENT STYLE//

export const ContentStyle = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%); 

`

