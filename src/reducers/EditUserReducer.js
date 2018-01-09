const defaultState = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone:'',
    password:'',
};
 
const { Map } = require('immutable');
const usuariomap = Map({ username: 'das', first_name: 'das', last_name: '', email:'' , phone:'', password:'' })
const usuario = usuariomap;
const usuario_redux = usuario;

export default function reducer (state= usuario, action) {
    switch (action.type){
        case 'UPDATE':
            return (usuario_redux.push, state, {
                username: action.username,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                phone: action.phone
            });
        
        case 'NEW_PASSWORD':
            return (usuario_redux.push, state, {
                password: action.password
            });    

        default:
            return state;
    }
}