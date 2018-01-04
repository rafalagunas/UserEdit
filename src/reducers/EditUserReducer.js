const defaultState = {
    username: '',
    name: '',
    lastname: '',
    email: ''
};
 

export default function reducer (state= defaultState, action) {
    switch (action.type){
        case 'UPDATE':
            return Object.assign({}, state, {
                username: action.username,
                name: action.name,
                lastname: action.lastname,
                email: action.email
            });

        default:
            return state;
    }
}