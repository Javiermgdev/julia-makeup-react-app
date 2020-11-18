import React from 'react';
import { LogInStyle } from './Style';

export default class LogIn extends React.Component {

    render (){

        return (
            <LogInStyle className="LogIn">
                <form class="LogIn-Admin">
                    <h4>Ingresa</h4>
                    <input type="text" class="User" placeholder="User"/>
                    <input type="password" class="Password"  placeholder="Password"/>
                    <button class="button" type="submit">Enter</button>
                </form>
            </LogInStyle>
        );
    }

}