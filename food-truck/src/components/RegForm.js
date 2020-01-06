import React from "react";
import {useForm} from "react-hook-form";


function RegForm(){

    const onSubmit = (data) => {
        console.log(data)
    };
    const { register, handleSubmit, errors } = useForm();
    

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
            <select name="dinerOrOwner" ref={register({ required: "Must select option" })} >
                <option value="">Select...</option>
                <option value="diner">A Hungry Diner</option>
                <option value="owner">Food Truck Operator</option>
            </select>
            {errors.dinerOrOwner && <p>{errors.dinerOrOwner.message}</p>}
            
            <input name="submit" type="submit" />

        </form>
    )
}

export default RegForm;