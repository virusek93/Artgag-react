import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CryptoJS from 'crypto-js';
class LoginForm extends Component {
    retriveLogin = (e) => {
        this.props.data.loginChange(e.target.value);
    }
    retrivePassword = (e) => {
        const encryptedPass = CryptoJS.MD5(e.target.value).toString();
        this.props.data.passwordChange(encryptedPass);
    }
    render(){
        const {from} = this.props.location.state || { from: {
            pathname: '/'
        }}
        if(this.props.data.data.isLogged){
            return <Redirect to={from} />
        }
        return (
            <div className="login-form grid-x grid-padding-x align-center-middle text-center">
                <div className="cell medium-6">
                    <h1>Login form</h1>
                    <form onSubmit={this.props.data.loginHandle}>
                        <label className="text-left">
                            Login
                            <input type="text" placeholder="Login" value={this.props.data.login} onChange={this.retriveLogin}/>
                        </label>
                        <label className="text-left">
                            Password
                            <input type="password" placeholder="Password" onChange={this.retrivePassword}/>
                        </label>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>            
        );
    }
}

export default LoginForm;