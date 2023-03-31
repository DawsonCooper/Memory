import React from 'react';
import '../../styles/Card.css'
import './styles/styles.css';
import {Link} from 'react-router-dom'

export default function AuthForm(props){
    const submitEvent = props.submitForm;

    return (
        <form className='auth-form-wrapper'>
            <h1>{props.title}</h1>
            <input className='form-control' type='text' placeholder='Username' ariaLabel='Username Field' />
            <input className='form-control' type='password' placeholder='Password' ariaLabel='Password Field' />
            <input className='form-control cust-btn' type='submit' value='Submit' ariaLabel='Submit Button' onClick={submitEvent}/>
            <Link to={props.page}>
                <div>{props.prompt}</div>
            </Link>
        </form>
    )
}