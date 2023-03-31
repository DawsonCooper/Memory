import React from 'react';
import AuthForm from './AuthForm';
export default function Register(props){

    const submitRegisterForm = (e) => {
        e.preventDefault();
        console.log('Register');
    }
    return (
        <>
            <AuthForm submitForm={(e) => submitRegisterForm(e)} page='/login' prompt='Existing Account?' title='Sign Up' />
            
        </>
    )
}
