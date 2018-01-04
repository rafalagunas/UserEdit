import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Input,
  View,
  Button,
  TextInput
} from 'react-native';

import {connect} from 'react-redux';
import { update } from '../../actions/UserEdit';


class UserEdit extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'UPDATE',
            username: '',
            name: '',
            lastname: '',
            email: ''
        };
    }

    userUpdate (e) {
        this.props.userUpdate(this.state.username, this.state.name, this.state.lastname, this.state.email);
        e.preventDefault();
   console.debug(this.props)

    }
    render() {
        return(
            <View > 
                <TextInput 
                    placeholder="Username"
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                    />
                <TextInput 
                    placeholder="Nombre"
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                    />
                <TextInput 
                    placeholder="Apellido"
                    onChangeText={(text) => this.setState({ lastname: text })}
                    value={this.state.lastname}
                    />
                <TextInput 
                    placeholder="Correo"
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    />

                <Button
                    title="Guardar"
                    onPress={(e) => this.userUpdate(e)}
                    />
            </View>    
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userUpdate: (username, name, lastname, email) => { dispatch(update(username, name, lastname, email)); },
    }
}
 
const mapStateToProps = state => {
    return {
        username: state.EditUserReducer.username,    
        name: state.EditUserReducer.name,
        lastname: state.EditUserReducer.lastname,
        email: state.EditUserReducer.email
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
