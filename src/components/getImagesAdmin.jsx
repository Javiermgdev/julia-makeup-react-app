import React from "react";
import axios from "axios";
import Dropzone from "./Dropzone";




 export default class AdminDashboard extends React.Component{

     state = {
         imagesCloud: [],
     }

     componentDidMount(){
         axios.get(`/imagesCloud/get`)
         .then(response => {
             console.log(response);
             if(response.status )
             this.setState({ imagesCloud: response.data});
         });
     }

     render(){
         return (
            <div>
                <h1>Services</h1>
                <div className="Listattentions">

                

            {
                this.state.imagesCloud.map(imagesCloud =>
                    //the condition will  here to show only the enable works 

                    <div>
                        <p>{imagesCloud.idImagesCloud}</p>
                        <h3>{imagesCloud.nameImagesCloud}</h3>
                        <img src={imagesCloud.linkImagesCloud} alt=""/>
                        <Dropzone idImagesCloud={imagesCloud.idImagesCloud}/>         
                    </div>
                )
            }
            </div>
        </div>
         )
     }


 }