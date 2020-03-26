import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCollections } from "../../redux/shop/collection-action";
import CollectionPreview from "../preview-component/preview-collection-component";
import "./collections-overview.scss";

const CollectionsOverview = ({ shop, getAllCollections }) => {

    useEffect(() => {
        getAllCollections()
    }, []);

    const renderCollections = () => {
        if (shop.collection) {
            return shop.collection.map(({ id, ...props }) => {
                return (
                    <CollectionPreview
                        key={id}
                        {...props}
                    />
                )
            })
        }
    }

    return (
        <div className="collections-overview">
            {renderCollections()}
        </div>
    )
}

export default connect(null, { getAllCollections })(CollectionsOverview);