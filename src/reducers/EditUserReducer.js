const { Map } = require('immutable');
const usuariomap = Map({ username: '', first_name: '', last_name: '', email:'' , phone:'', password:'' })


const initial = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: ''
};

const reducer = (state = usuariomap, action)  => {
    switch (action.type){
        case 'UPDATE':
            return state.mergeWith({
                username: action.username,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                phone: action.phone
            });
        
        case 'NEW_PASSWORD':
            return state.mergeWith({
                password: action.password
            });    
        
        case 'CHANGE_USERNAME':
            return state.set('username', action.username);

        
        case 'CHANGE_FIRSTNAME':
            return state.set('first_name', action.first_name);

        case 'CHANGE_LASTNAME':
            return state.set('last_name', action.last_name);
        
        case 'CHANGE_EMAIL':
            return state.set('email', action.email);
        
        case 'CHANGE_PHONE':
            return state.set('phone',action.phone);
        

        default:
            return state;
    }
}

export default reducer;