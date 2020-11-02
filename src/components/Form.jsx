import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Form } from './Style';

export default class FormStyle extends React.Component {

    state = {
        client: [],
        date:new Date(),
        nameClient:'',
        phoneNumberClient:'',
        dateMakeUpClient:''
    }

    onChangenameClient = (e) => {
        this.setState({
            nameClient: e.target.value
        })
    }

    onChangephoneNumberClient = (e) => {
        this.setState({
            phoneNumberClient: e.target.value
        })
    }

    onChangedateMakeUpClient=date => {
        console.log(date);
        this.setState({date});

    }

    onSubmitClient = async (e) => {
        e.preventDefault();
        const clientInfo = {
            nameClient: this.state.nameClient,
            phoneNumberClient: this.state.phoneNumberClient,
            dateMakeUpClient: this.state.date
        };
    const response = await axios.post(`/client/save`, clientInfo);

    // this.setState({
    //     nameClient:'',
    //     phoneNumberClient:'',
    //     dateMakeUpClient:''
    // });

    console.log(clientInfo);

    }

    render (){

        return (
            <Form className="Form">
                <div>
                    <form onSubmit={this.onSubmitClient} class="form-register">
                        <h4>Agenda tu cita</h4>
                        <input 
                        class="controls" 
                        type="text" 
                        name="nameClient" 
                        onChange={this.onChangenameClient}
                        id="names" 
                        placeholder="Full Name"/>
                        <input 
                        class="controls" 
                        type="number" 
                        name="phoneNumberClient" 
                        onChange={this.onChangephoneNumberClient}
                        id="phoneNumber" 
                        placeholder="Phone Number"/>
                        <DatePicker 
                        class="controls" 
                        name="dateMakeUpClient"
                        dateFormat="dd/MM/yyyy" 
                        selected={this.state.date}
                        onChange={this.onChangedateMakeUpClient}/>
                        <button class="butom" type="submit">Send</button>
                    </form>
                </div>
            </Form>
        )
    }
}