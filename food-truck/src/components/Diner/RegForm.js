import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

const RegForm = ({ values, errors, touched, status, ...props }) => {
  console.log("props", props);
  const [user, setUser] = useState([]);
  // console.log(values, "values")

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <div className="registration-form">
      <Form className="form">
        
        <Field className="field userName" type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
        
        <Field className="field password" type="password" name="password" placeholder="password" />
        <p className="text">*Password must be at least 6 characters.</p>
        {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}      
        

        <label className="text" id="register">
          I would like to register as a FoodTruck TrackR </label>
        <Field className="field role-select" as="select" name="role">
          <option placeholder="select" default={false} hidden={true}>...select</option>
          <option placeholder="select" disabled="disabled" default={false}>...select</option>
          <option type="text" value="diner" default={false}>Diner</option>
          
        </Field>
        {touched.role && errors.role && (<p className="errors">{errors.role}</p>)}

        <button type="submit">Register</button>
      </Form>
    </div>
  ); //closes RegForm return
}; //closes RegForm

const FormikRegistration = withFormik({
  mapPropsToValues({ username, email, password, passwordVerify, name, role }) {
    return {
      username: username || "",
      password: password || "",
      role: 1
    };
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters.")
      .max(12, "Password must not exceed 12 characters."),
    role: yup.string().required("Must register as either diner or operator")
  }),

 handleSubmit(values, {props}) {
    axios
      .post("https://food-truck-trackr.herokuapp.com/api/auth/register", values)
      .then(
        props.history.push(
          "/Login"
         // state: {
            //username: values.username,
            //password: values.password
         // }
        )
      )
      .catch(err => console.log(err.response));
  }
})(RegForm);

export default FormikRegistration;