import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../preview-component/preview-collection-component";
import "./collections-overview.scss";

const CollectionsOverview = ({ shop }) => {
    return (
        <div className="collections-overview">
            {
                shop && shop.collection.map(({ id, ...props }) => {
                    return (
                        <CollectionPreview
                            key={id}
                            {...props}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = ({ shop }) => ({
    shop
});

export default connect(mapStateToProps, null)(CollectionsOverview);