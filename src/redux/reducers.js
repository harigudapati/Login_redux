import Promise from 'es6-promise' 
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function setLoginSuccess(isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function login(username, password) {
    return dispatch => {
       dispatch(setLoginSuccess(false));

        sendLoginRequest(username,password)
        .then(success => {
            dispatch(setLoginSuccess(true))
        })
        .catch(err => console.log(err))
    }
}

export default function reducer( state= {isLoginSuccess: false}, action) {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };
            default:
                return state;
    }
}

function sendLoginRequest(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username==='hruday@gmail.com' && password === 'hruday123') {
                return resolve(true);
            }
            else {
                return reject(new Error('Invaid username or password'))
            }
        },1000)
        
    })
}