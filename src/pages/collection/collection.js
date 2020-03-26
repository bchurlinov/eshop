import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCollection } from "../../redux/shop/collection-action";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";

const CollectionPage = ({ match, getCollection, shop }) => {

    useEffect(() => {
        getCollection(match.params.categoryId)
    }, []);

    const renderCollection = () => {
        return shop && shop.singleCollection.map(collection => {
            console.log(collection);
            return (
                <React.Fragment key={collection.title}>
                    <h2 className="title">{collection.title}</h2>
                    <div className="items">
                        {renderCollectionItems(collection.items)}
                    </div>
                </React.Fragment>
            )
        });
    }

    const renderCollectionItems = items => {
        return items && items.map((item, index) => <CollectionItem item={item} key={index} />)
    }

    return (
        <div className="collection-page">
            {renderCollection()}
        </div>
    )
}

const mapStateToProps = ({ shop }) => ({
    shop
});

export default connect(mapStateToProps, { getCollection })(CollectionPage);

