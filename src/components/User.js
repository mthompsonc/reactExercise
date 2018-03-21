import React, {Component} from 'react';
//importar estilos para el trabajo.

class User extends Component {
  render () {
    return (
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}

export default User;