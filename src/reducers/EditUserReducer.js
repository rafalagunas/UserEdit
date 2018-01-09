const defaultState = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone:'',
    password:'',
    
};
 

export default function reducer (state= defaultState, action) {
    switch (action.type){
        case 'UPDATE':
            return Object.assign({}, state, {
                username: action.username,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                phone: action.phone,
                password: action.password
            });

        default:
            return state;
    }
}