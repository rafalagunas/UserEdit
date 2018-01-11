const { Map } = require('immutable');
const usuariomap = Map({ username: 'd', first_name: 'das', last_name: '', email:'' , phone:'', password:'' })
const usuario = usuariomap;
const usuario_redux = usuario;


const reducer = (state= usuariomap, action)  => {
    switch (action.type){
        case 'UPDATE':
            return (state.mergeWith, {
                username: action.username,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                phone: action.phone
            });
        
        case 'NEW_PASSWORD':
            return (state.mergeWith, state, {
                password: action.password
            });    

        default:
            return state;
    }
}

export default reducer;