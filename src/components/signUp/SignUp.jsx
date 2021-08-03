import React from 'react'
import './signUp.scss'

import CustomButton from '../customButton/CustomButton'
import FormInput from '../form-input/FormInput'

import { auth, createUserProfileDocument } from '../../firebase/firebase'

const SignUp = () => {
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

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (error) {
            console.error({
                message: 'IN SINUP COMPONENT',
                error
            })
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserCredentials(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <div className='sign-up'>
            <h2 className="title">I do not have a account</h2>
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
        </div>
    )
}

export default SignUp