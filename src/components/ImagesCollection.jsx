import React from "react";
import Gallery from './Gallery'
import { ImagesCollectionStyle } from "./Style";


export default class ImagesCollection extends React.Component {




    render() {
        return(
            <ImagesCollectionStyle>

             <img src={Gallery.img1}/>
             <img src={Gallery.img2}/>
             <img src={Gallery.img4}/>
             <img src={Gallery.img5}/>
             <img src={Gallery.img6}/>
             <img src={Gallery.img7}/>
            
            </ImagesCollectionStyle>
        )
    }



}