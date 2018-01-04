export const update = (username, name, lastname, email) => {
    return {
        type: 'UPDATE',
        username: username,
        name: name,
        lastname: lastname,
        email: email
    };
};
 