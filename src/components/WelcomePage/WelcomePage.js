import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Input,
  Dimensions,
  Button,
  TouchableOpacity,
  View
} from 'react-native';


import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-swiper';

const window = Dimensions.get('window');


const slideHeight = (window.height)/1.3;

const ButtonVieWidth = (window.width)/2;
const ButtonViewHeight = (window.height)/.5;

class WelcomePage extends Component {
    constructor (props) {
        super (props);

        this.state = {
            position: 1,
            interval: null,
            height: slideHeight
        };
    }



    render() {
        return (
            
            <View>
            <ImageSlider
                images={[
                    `http://placeimg.com/640/480/any`,
                    `http://placeimg.com/640/480/any`,
                    `http://placeimg.com/640/480/any`,
                ]}
                position={this.state.position}
                onPositionChanged={position => this.setState({position})}
                height={this.state.height}
            />
            <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.ButtonLogin}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonRegister}>
                        <Text>REGISTER</Text>
                    </TouchableOpacity>
            </View> 
        </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ecf0f1'
    },    
    ButtonsView: {
        width: ButtonVieWidth,
        marginTop: 15
    },
    buttonsContainer: {
        flex:1,
        flexDirection: 'row'
    },

    ButtonLogin:{
        height: 160,
        marginTop:15,
        backgroundColor: "#f1de5b",
        alignItems:'center',
        justifyContent: 'center',
        width: ButtonVieWidth
    },

    ButtonRegister:{
        height: 160,
        marginTop:15,
        backgroundColor: "#0459ed",
        alignItems:'center',
        justifyContent: 'center',
        width: ButtonVieWidth
    },
  });

export default WelcomePage;