import React from 'react'
import { SignInAndSignUpContainer } from './signInUp.styles'

import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'

const SignInSignUp = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}


export default SignInSignUp