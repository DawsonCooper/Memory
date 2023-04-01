import React, {useState} from 'react';
import AuthForm from './AuthForm';
export default function Login(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    
    const submitLoginForm = (e) => {

        e.preventDefault();
        console.log({username, password})
        fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                username:username,
                password:password
            })
          }).then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }
    return (
        <>
            <AuthForm submitForm={(e) => submitLoginForm(e)} page='/register' prompt='New Account?' title='Login' 
                username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
           
        </>
    )
}
