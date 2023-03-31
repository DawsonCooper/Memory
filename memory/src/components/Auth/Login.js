import React from 'react';
import AuthForm from './AuthForm';
export default function Login(props){
    
    const submitLoginForm = (e) => {
        e.preventDefault();
        console.log('Login')
    }
    return (
        <>
            <AuthForm submitForm={(e) => submitLoginForm(e)} page='/register' prompt='New Account?' title='Login' />
           
        </>
    )
}
