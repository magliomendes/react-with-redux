export const userService = {
    login,
    logout
};

function login(email, password) {
    const requestOptions = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('https://reqres.in/api/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', user.token);
            return user;
        })
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data;
    });
}