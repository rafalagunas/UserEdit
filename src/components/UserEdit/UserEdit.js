import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Input,
  View,
  Button,
  Image,
  ScrollView,
  TextInput,
  CameraRoll
} from 'react-native';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { update, changeUsername, changeFirstName, changeLastName, changeEmail, changePhone } from '../../actions/UserEdit';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Example from './CameraRoll';
import reducer from '../../reducers/EditUserReducer';

class UserEdit extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'UPDATE',
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            phone:'',
            image: require('../../images/descarga.jpg'),
            gallery: false
        };
    }

    userUpdate (e) {
        this.props.userUpdate(this.props.username, this.props.first_name, this.props.last_name, this.props.email, this.props.phone, this.props.password);
        e.preventDefault();
        //console.debug(this.state)
    }

    userChangeImage (e){
        if(this.state.gallery == false){
        this.setState({gallery: true});
        }
    }



    render() {
        if (this.state.gallery)
        return(
            <Example/>
        )
        else 
        return(
            <ScrollView>
                <Image
                    source={this.state.image}
                    style={{marginLeft:90}}
                    onPress={(e, state) => this.userChangeImage(e)}
                />
                
                <TextInput 
                    placeholder="Usuario"
                    onChangeText={(text) => this.props.usernameChange(text)}
                    value={this.props.username }
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Nombre"
                    onChangeText={(text) => this.props.FirstNameChange(text)}
                    value={this.props.first_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Apellido"
                    onChangeText={(text) => this.props.LastNameChange(text)}
                    value={this.props.last_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Correo"
                    onChangeText={(text) => this.props.EmailChange(text)}
                    value={this.props.email}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Teléfono"
                    onChangeText={(text) => this.props.PhoneChange(text)}
                    value={this.props.phone}
                    textAlign="center"
                />

                <Button
                    title="Guardar"
                    onPress={(e) => this.userUpdate(e)}
                    color="#461976"
                />
                
                <Button
                    title="Imagen"
                    onPress={(e, state) => this.userChangeImage(e)}
                    style={{paddingTop:30}}
                />
           
            </ScrollView>    
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usernameChange: (username) => { dispatch(changeUsername(username)); },
        FirstNameChange: (first_name) => { dispatch(changeFirstName(first_name)); },
        LastNameChange: (last_name) => { dispatch(changeLastName(last_name)); },
        EmailChange: (email) => { dispatch(changeEmail(email)); },
        PhoneChange: (phone) => { dispatch(changePhone(phone)); },
        userUpdate: (username, first_name, last_name, email, phone, password) => { dispatch(update(username, first_name, last_name, email, phone, password)); }
    }
}
 
const mapStateToProps = state => {
    console.log(state)
    return {  
        username: state.edituser.get("username"),    
        first_name: state.edituser.get("first_name"),
        last_name: state.edituser.get("last_name"),
        email: state.edituser.get("email"),
        phone: state.edituser.get("phone"),
        password: state.edituser.get("password")
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);