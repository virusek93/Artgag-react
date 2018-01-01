import React, { Component } from 'react';
import Nav from './components/Nav';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      login: '',
      password: '',
      token: false,
      isLogged: false
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get('http://46.228.234.6:8000/api/posts')
      .then((response) => {
        this.setState({posts: response.data.posts});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleLoginChange(login) {
    this.setState({login})
  }

  handlePasswordChange(password) {
    this.setState({password})
  }

  onLogin(e) {
    e.preventDefault();
    axios.post('http://46.228.234.6:8000/api/login', {
      login: this.state.login,
      password: this.state.password,
    }).then((response) => {
      if (response.data.status) {
        this.setState({isLogged: response.data.status})
      }
    }).catch(function (error) {
      console.log(error.data);
    });
  }

  render() {
    return (
      <div>
        <Nav data={this.state}
             loginHandle={this.onLogin}
             loginChange={this.handleLoginChange}
             passwordChange={this.handlePasswordChange}/>
      </div>
    );
  }
}

export default App;
