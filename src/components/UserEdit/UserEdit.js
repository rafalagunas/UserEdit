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

    render() {
        return(
            <View > 
                <TextInput 
                    placeholder="Username"
                    onChangeText={(text) => this.setState({ username: text })}
                    />
                <TextInput 
                    placeholder="Nombre"
                    onChangeText={(text) => this.setState({ name: text })}
                    />
                <TextInput 
                    placeholder="Apellido"
                    onChangeText={(text) => this.setState({ lastname: text })}
                    />
                <TextInput 
                    placeholder="Correo"
                    onChangeText={(text) => this.setState({ email: text })}
                    />

                <Button
                    title="Guardar"
                    />
            </View>    
        );
    }
}

export default UserEdit;