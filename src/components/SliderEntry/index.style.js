import { StyleSheet, Dimensions } from 'react-native';

export const colors = {
    black: '#495fa0',
    gray: '#495fa0',
    background1: '#495fa0',
    background2: '#495fa0'
};

// Variables////////////////////////////
const window = Dimensions.get('window');
const slideHeight = (window.height)/1.3;
const ButtonVieWidth = (window.width)/2;
const ButtonViewHeight = (window.height)/.5;
////////////////////////////////////////

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1,
        paddingTop: 50
    },
    scrollviewContentContainer: {
        paddingBottom: 50
    },
    exampleContainer: {
        marginBottom: 30
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    
    next:{
        backgroundColor:"#000000",
        marginTop: 10
    },
    container: {
      flex: 1,
      backgroundColor: '#495fa0'
    },    
    ButtonsView: {
        width: ButtonVieWidth,
        marginTop: 15
    },
    buttonsContainer: {
        marginTop:-70,
        flex:1,
        flexDirection: 'row'
    },

    ButtonLogin:{
        height: 56,
        marginTop:45,
        backgroundColor: "#f1de5b",
        alignItems:'center',
        justifyContent: 'center',
        width: ButtonVieWidth
    },

    ButtonRegister:{
        height: 56,
        marginTop:45,
        backgroundColor: "#0459ed",
        alignItems:'center',
        justifyContent: 'center',
        width: ButtonVieWidth
    },
});