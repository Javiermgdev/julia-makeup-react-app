import React from 'react';
import Form from "./Form";
import  ImagesCollection  from "./ImagesCollection";
import { ContentStyle } from "./Style";

export default class Content extends React.Component {

    render() {
        return (
            <ContentStyle>
                <Form></Form>
                <ImagesCollection></ImagesCollection>
            </ContentStyle>
        )
    }
}

