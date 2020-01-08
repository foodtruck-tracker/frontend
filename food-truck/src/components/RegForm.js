import React from "react";
import {useForm} from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";
import {Link} from "react-router-dom";



function RegForm(){
  
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/auth/register', data)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Food Truck Tracker Registration</h1>

            <label>User Name:</label>
            <input name="username" type="text" ref={register({ required: "User name required", minLength: {value: 4, message:"Must be 4 characters"} })} />
            {errors.username && <p>{errors.username.message}</p>}

            <label>Password:</label>
            <input name="password" type="password" placeholder="Minimum 8 characters" ref={register({ required: "Password Required", minLength: {value: 8, message: "Requires 8 characters"} })} />
            {errors.password && <p>{errors.password.message}</p>}

            <label>Email:</label>
            <input name="email" type="email" placeholder="food@truck.com" ref={register({ required: "Email required", pattern: {value: /^\S+@\S+$/i, message:"Email not valid"} })} />
            {errors.email && <p>{errors.email.message}</p>}
            
            <label>I am:</label>
            <select name="userRole" ref={register({ required: "Must select option" })} >
                <option value="">Select...</option>
                <option value="2">A Hungry Diner</option>
                <option value="1">Food Truck Operator</option>
            </select>
            {errors.userRole && <p>{errors.userRole.message}</p>}

            {/* <label>Enable my location</label>
            <input type="checkbox" name="location" ref={register ({required: "Must agree to share location"})} />
            {errors.location && <p>{errors.location.message}</p>}
             */}
            
            
            <input name="submit" type="submit" />

            <Link to='/'>Already a user? LOG IN</Link> 

        </form>
    )
}

export default RegForm;