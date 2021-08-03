import React from 'react'
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './previewCollection.styles'
import CollectionItem from '../item-collection/collectionItem'

const PreviewCollection = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items.filter((item, idx) => idx < 4).map((item) => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default PreviewCollection