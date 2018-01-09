import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Input,
  View,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import { update } from '../../actions/UserEdit';
import { new_password } from '../../actions/NewPass';


class NewPass extends Component{
    constructor (props){
        super(props);
        this.state={
            password:'',
            confirm_password:''
        }
    }

    changePassword (e) {

        if (this.state.password == this.state.confirm_password){
            this.props.changePassword(this.state.password);
            e.preventDefault();
            console.debug(this.props)
        }
        else{
            alert("Contraseñas no concuerdan");
        }
    }
    

    render() {

        return(
        <ScrollView>
            <TextInput 
            placeholder="Nueva contraseña"
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            textAlign="center"
            />
            <TextInput 
            placeholder="Nueva contraseña"
            onChangeText={(text) => this.setState({ confirm_password: text })}
            value={this.state.confirm_password}
            textAlign="center"
            />

            <Button
                title="Confirmar"
                onPress={(e) => this.changePassword(e)}
                color="#461976"
            />

        </ScrollView> 
        );
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: (password) => { dispatch(new_password(password)); }
    }
}


const mapStateToProps = state => {
    return {
        password: state.EditUserReducer.password
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewPass);