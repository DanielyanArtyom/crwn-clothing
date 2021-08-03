import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'

import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'


const Directory = () => {
    const sections = useSelector(selectDirectorySections)

    // const [sections, setSections] = React.useState()

    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}


export default Directory