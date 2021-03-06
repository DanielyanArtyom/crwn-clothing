import React from 'react'
import { SignUpContainer, SignUpTitle } from './signUp.styles'

import CustomButton from '../customButton/CustomButton'
import FormInput from '../form-input/FormInput'
import { signUpStart } from '../../redux/user/userActions'
import { useDispatch } from 'react-redux'

const SignUp = () => {
    const dispatch = useDispatch()
    const [userCredentials, setUserCredentials] = React.useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = userCredentials

        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }
        dispatch(signUpStart({ displayName, email, password, }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserCredentials(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp