import React from "react";
import axios from "axios";

import DropzoneImages from "./Dropzone";



export default class AddImage extends React.Component {

    state = {
        imagesCloud: []
    }

    onChangeIdImagesCloud = (e) => {
        this.setState({
            idImagesCloud: e.target.value
        });
    };

    onChangeNameImagesCloud = (e) => {
        this.setState({
            nameImagesCloud: e.target.value
        });
    };

    onChangelinkImagesCloud = (e) => {
        this.setState({
            linkImagesCloud: e.target.value
        });
    };

    onSubmitImagesCloud = async (e) => {
        const response = await axios.post(`/imagesCloud/create`, {
            nameImagesCloud: this.state.nameImagesCloud,
            linkImagesCloud: this.state.linkImagesCloud


        });
        this.setState({
            nameImagesCloud: '',
            linkImagesCloud: ''
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitImagesCloud}>
                    <input
                        type="text"
                        name="nameImagesCloud"
                        placeholder="ImagesCloud Name"
                        onChange={this.onChangeNameImagesCloud} />
                    <DropzoneImages idImagesCloud={this.onChangeIdImagesCloud}/>                       
                    <button type="submit">SEND FORM</button>    
                </form>
            </div>
        )
    }
}