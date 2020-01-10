import React from 'react';

import { axiosWithAuth } from '../../utils/axioswithAuth';

class Login extends React.Component {
  constructor(props)
  {
  super();
  this.state = {
    credentials: {
      username: '',
      password: '',
      role: 1
    },
    isFetching: false
  };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    });
    axiosWithAuth()
      .post('/auth/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/diner-dashboard');
      })
      .catch(err => console.log(err));
  };

  render() {
    localStorage.clear()
    return (
      <div>
      <div class="ui huge header">Food Truck Tracker Login</div>
        <form class=" ui form" onSubmit={this.login}>
          <div class="field">
          <input
            type="text"
            name="username"
            placeholder="enter your username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          </div>
          <div class="field">
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          </div>
          <button class="ui secondary button">Log in</button>
          {this.state.isFetching && 'logging in'}
        </form>
      </div>
    );
  }
}

export default Login;