import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Input,
  View,
  Button,
  TextInput
} from 'react-native';

//import {connect} from 'react-redux';

class UserEdit extends Component {
    
    render() {
        return(
            <View > 
                <TextInput 
                    placeholder="Username"
                    />
                <TextInput 
                    placeholder="Nombre"
                    />
                <TextInput 
                    placeholder="Apellido"
                    />
                <TextInput 
                    placeholder="Correo"
                    />

                <Button
                    title="Guardar"
                    />
            </View>    
        );
    }
}

export default UserEdit;