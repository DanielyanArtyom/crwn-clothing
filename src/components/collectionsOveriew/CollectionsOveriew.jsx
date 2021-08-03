import React from 'react'
import { CollectionsOveriewContainer } from './collectionOveriew.styles'
import { createStructuredSelector } from 'reselect'
import PreviewColletion from '../preview-collection/previewCollection'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'
import { useSelector } from 'react-redux'

const CollectionsOveriew = () => {
    const { collections } = useSelector(createStructuredSelector({
        collections: selectCollectionsForPreview
    }))

    return (
        <CollectionsOveriewContainer>
            {
                collections.map(({ id, ...otherColletcionProps }) => (
                    <PreviewColletion key={id} {...otherColletcionProps} />
                ))
            }
        </CollectionsOveriewContainer>
    )
}

export default CollectionsOveriew