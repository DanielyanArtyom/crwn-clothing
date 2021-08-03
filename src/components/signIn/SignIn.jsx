import React from 'react'
import './signIn.scss'

import FormInput from '../form-input/FormInput'
import CustomButton from '../customButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase'

const SignIn = () => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = credentials

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error({
                message: 'IN SIGNIN COMPONENT',
                error
            })
        }


    }

    const onHandleChange = event => {
        const { value, name } = event.target
        setCredentials(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
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
                <div className="buttons">
                    <CustomButton type='submit' >Submit Form</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
                </div>

            </form>


        </div>
    )
}

export default SignIn