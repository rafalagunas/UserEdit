export const update = (username, first_name, last_name, email, phone) => {
    return {
        type: 'UPDATE',
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
    
    };
};
 
export const changeUsername = (username) => {
    return{
        type: 'CHANGE_USERNAME',
        username: username
    };
};

export const changeFirstName = (first_name) => {
    return{
        type: 'CHANGE_FIRSTNAME',
        first_name: first_name
    };
};

export const changeLastName = (last_name) => {
    return{
        type: 'CHANGE_LASTNAME',
        last_name: last_name
    };
};

export const changeEmail = (email) => {
    return{
        type: 'CHANGE_EMAIL',
        email: email
    }
}


export const changePhone = (phone) =>{
    return{
        type: 'CHANGE_PHONE',
        phone:phone
    }
}