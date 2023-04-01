import React, {useState} from 'react';
import AuthForm from './AuthForm';
export default function Register(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   
    const submitRegisterForm = (e) => {
        e.preventDefault();
        console.log({username, password});
        fetch('/register', {
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
            <AuthForm submitForm={(e) => submitRegisterForm(e)} page='/login' prompt='Existing Account?' title='Sign Up'
              username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
            
        </>
    )
}
