import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";
import WithSpinner from "../withSpinner/withSpinner";
import CollectionsOveriew from "./CollectionsOveriew";

const MapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOveriewContainer = compose(
    connect(MapStateToProps),
    WithSpinner
)(CollectionsOveriew)

export default CollectionsOveriewContainer
