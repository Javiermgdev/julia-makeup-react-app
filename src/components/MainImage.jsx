import React from "react";
import Gallery from './Gallery'
import { MainImageStyle } from "./Style";
import makeup1 from './images/makeup1.png'


export default class MainImage extends React.Component {

    render() {
        return(
            <MainImageStyle>
             <img src={Gallery.makeup1}/>
             <div>
                 <h1>Te doy la bienvenida a mi pagina</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore totam consectetur fugiat blanditiis omnis illum sequi nisi aspernatur, in suscipit quod voluptates, aliquam magni ullam? Commodi dolor veniam error maxime! Doloribus, nihil assumenda! Repellat aut molestias quibusdam cumque debitis?</p>
                 
             </div>
            </MainImageStyle>
        )
    }



}