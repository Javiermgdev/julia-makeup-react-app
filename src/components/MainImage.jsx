import React from "react";
import Gallery from './Gallery'
import { MainImageStyle } from "./Style";


export default class MainImage extends React.Component {

    render() {
        return(
            <MainImageStyle>
             <img src={Gallery.img3}/>
            </MainImageStyle>
        )
    }



}