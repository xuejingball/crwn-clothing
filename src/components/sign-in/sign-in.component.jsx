import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

import './sign-in.style.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStart(email, password);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={userCredentials.email}
                    handleChange={handleChange}
                    label="Email"
                    required />
                <FormInput
                    name='password'
                    type='password'
                    value={userCredentials.password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn> Sign in with Google
                        </CustomButton>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);