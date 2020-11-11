import React from "react";
import ContentComponent from "./Content";
import MainImage from './MainImage'

export default class IndexComponent extends React.Component{
    render(){
        return (
            <div>   
                <MainImage/>
                <ContentComponent/>
            </div>
        )
    }
}