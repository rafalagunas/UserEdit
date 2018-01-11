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

import { update } from '../../actions/UserEdit';

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
        this.props.userUpdate(this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.phone, this.state.password);
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
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.props.username}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Nombre"
                    onChangeText={(text) => this.setState({ first_name: text })}
                    value={this.props.first_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Apellido"
                    onChangeText={(text) => this.setState({ last_name: text })}
                    value={this.props.last_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Correo"
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.props.email}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Teléfono"
                    onChangeText={(text) => this.setState({ phone: text })}
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
        
        userUpdate: (username, first_name, last_name, email, phone, password) => { dispatch(update(username, first_name, last_name, email, phone, password)); }
    }
}
 
const mapStateToProps = state => {
    console.log(state)
    return {  
        username: state.reducer.get("username"),    
        first_name: state.reducer.get("first_name"),
        last_name: state.reducer.get("last_name"),
        email: state.reducer.get("email"),
        phone: state.reducer.get("phone"),
        password: state.reducer.get("password")

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);