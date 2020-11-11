import React from 'react';

export default class LogIn extends React.Component {

    render (){

        return (
            <div className="LogIn">
                <form action="">
                    <h4>Ingresa</h4>
                    <input type="text" id="User" placeholder="User"/>
                    <input type="password" id="Password"  placeholder="Password"/>
                    <button class="button" type="submit">Send</button>
                </form>
            </div>
        );
    }

}