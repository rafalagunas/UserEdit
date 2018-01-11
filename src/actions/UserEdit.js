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
 