import React, {Component} from 'react';
import User from './User';

class UserList extends Component{
  render () {
    return(
      <ul>
        {this.props.users.map(ele => {
          //Aquí retornará los elementos con un id.
          return (<User key = {ele.id} name={ele.name} email={ele.email} />
          );
        })}
      </ul>
    )
  }
}

export default UserList;

/*
*Este archivo contendrá los elementos del archivo User.js.
*/