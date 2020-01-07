import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''        
    });

    const handleChange = event => {
        setLoginInfo({
            ...loginInfo, [event.target.name] : event.target.value
        });
        //console.log(loginInfo);
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('', loginInfo)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload);
                props.history.push('')
            })
            .catch(err => console.log('Login Error', err));
    };


    return(
        <div>
            <h1>Welcome to the Food Truck Tracker!</h1>
            <p>Please login below</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginInfo.username}
                    onChange={handleChange}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                />

                <button type="submit">Log In</button>    
            </form>
        </div>
    );





















}

export default Login;