import React from 'react'
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './signIn.styles'

import FormInput from '../form-input/FormInput'
import CustomButton from '../customButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase'

import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions'
import { useDispatch } from 'react-redux'


const SignIn = () => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = async event => {
        event.preventDefault()
        dispatch(emailSignInStart(credentials))
    }

    const onHandleChange = event => {
        const { value, name } = event.target
        setCredentials(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={credentials.email}
                    handleChange={onHandleChange}
                    label='email'
                    required
                />

                <FormInput
                    name='password'
                    type='password'
                    value={credentials.password}
                    handleChange={onHandleChange}
                    label='password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit' >Submit Form</CustomButton>
                    <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn >Sign in with google</CustomButton>
                </ButtonsBarContainer>

            </form>


        </SignInContainer>
    )
}

export default SignIn