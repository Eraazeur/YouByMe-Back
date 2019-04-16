// in src/authProvider.js
import { AUTH_LOGIN } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:1337/user/login', {
            method: 'POST',
            body: JSON.stringify({ email:username, password }),
            mode: 'cors',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token, id }) => {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
            });
    }
    return Promise.resolve();
}