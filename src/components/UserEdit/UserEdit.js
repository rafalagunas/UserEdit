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

import {connect} from 'react-redux';
import { update } from '../../actions/UserEdit';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Example from './CameraRoll';

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
        console.debug(this.props)
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
                    value={this.state.username}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Nombre"
                    onChangeText={(text) => this.setState({ first_name: text })}
                    value={this.state.first_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Apellido"
                    onChangeText={(text) => this.setState({ last_name: text })}
                    value={this.state.last_name}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Correo"
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    textAlign="center"
                />
                
                <TextInput 
                    placeholder="Teléfono"
                    onChangeText={(text) => this.setState({ phone: text })}
                    value={this.state.phone}
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
    return {
        username: state.EditUserReducer.username,    
        first_name: state.EditUserReducer.first_name,
        last_name: state.EditUserReducer.last_name,
        email: state.EditUserReducer.email,
        phone: state.EditUserReducer.phone,
        password: state.EditUserReducer.password

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);