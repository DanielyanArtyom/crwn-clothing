import React from 'react'
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menuItem.styles'

import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(linkUrl)}>
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer>
                <ContentTitle>{title}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)