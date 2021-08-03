import React from 'react'
import { Group, StyledFormInput, FormInputlabel } from './formInput.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <Group>
            <StyledFormInput onChange={handleChange} {...otherProps} />
            {
                label && <FormInputlabel className={otherProps.value.length ? 'shrink' : ''}>{label}</FormInputlabel>
            }
        </Group>
    )
}

export default FormInput