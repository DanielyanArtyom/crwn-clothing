import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { StyledDirectoryMenu } from './directory.styles'

import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'


const Directory = () => {
    const sections = useSelector(selectDirectorySections)

    // const [sections, setSections] = React.useState()

    return (
        <StyledDirectoryMenu>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </StyledDirectoryMenu>
    )
}


export default Directory