import React from 'react'
import { CusstomButtonContainer } from './customButton.style'

const CustomButton = ({ children, ...props }) => {
    return (
        <CusstomButtonContainer {...props}>
            {children}
        </CusstomButtonContainer>
    )
}


export default CustomButton