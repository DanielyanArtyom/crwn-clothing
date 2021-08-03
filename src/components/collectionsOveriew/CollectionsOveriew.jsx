import React from 'react'
import './collectionsOveriew.scss'
import { createStructuredSelector } from 'reselect'
import PreviewColletion from '../preview-collection/previewCollection'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'
import { useSelector } from 'react-redux'

const CollectionsOveriew = () => {
    const { collections } = useSelector(createStructuredSelector({
        collections: selectCollectionsForPreview
    }))

    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherColletcionProps }) => (
                    <PreviewColletion key={id} {...otherColletcionProps} />
                ))
            }
        </div>
    )
}

export default CollectionsOveriew