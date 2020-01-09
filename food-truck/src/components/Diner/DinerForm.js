import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDiner } from '../../actions/dinerActions';

 class DinerForm extends Component {

     constructor(props) {
         super(props);
         this.state = {
             role: '',
             username: '',
             password: '',
             city: ''
             

         };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
}

onSubmit() {
   

    const diner = {
        role: this.state.role,
        name: this.state.username,
        age: this.state.password,
        city: this.state.city,
      

    }
    this.props.createDiner(diner);
}

  render() {
      
    return (
      <div>
        <h1>Become A Diner</h1>
        <form onSubmit={this.onSubmit}>
        <div>
          <label>Username: </label><br />
            <input type="text" name="username" onChange={this.onChange} value={this.state.title} placeholder="
           enter username here" />
        </div>
        <br />
        <div>
        
          <label>Password: </label><br />
            <input type="text" name="password" onChange={this.onChange} value={this.state.password} placeholder="
            enter password here" />
        </div>
        <br />
        <div>
        
          <label>City: </label><br />
            <input type="text" name ="city" onChange={this.onChange} value={this.state.city} placeholder="
            enter city here" />
        </div>
       
        <button type="submit">Submit</button>
        
        </form>
        
      </div>
    )
  }
}
DinerForm.propTypes = {
  createDiner: PropTypes.func.isRequired
}


export default connect(null, {createDiner}) (DinerForm);