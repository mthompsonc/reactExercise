import React, { Component } from 'react';
import logo from './logo.svg';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      users: [
          {id:1, name: 'pepito', email: 'pepito@gmail.com'},
          {id:2, name: 'test', email: 'test@test.cl'}
      ]
    }
  }

  handleOnAddUser(event){
    event.preventDefault();
    let user= {
      /* agregando los datos ingresados en el input.*/
      name: event.target.name.value,
      email: event.target.email.value,
    }

    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserList users= {this.state.users} />
        <UserForm onAddUser={this.handleOnAddUser.bind(this)}/>
      </div>
    );
  }
}

export default App;

/*
* {this.handleOnAddUser.bind(this)}
* Cuando le pasamos la información de un componente padre a un componente hijo.

*/
