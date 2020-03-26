import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCollections, getCollection } from "../../redux/shop/collection-action";
import { Link } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview.js/collections-overview";

const ShopPage = ({ match, shop, getAllCollections }) => {

    useEffect(() => {
        getAllCollections()
    }, []);

    return (
        <div className="shop-page">
            <Link to="/shop/hats">LINK TO</Link>
            <CollectionOverview shop={shop} key={shop} />
        </div>
    )
}

const mapStateToProps = ({ shop }) => ({
    shop
})

export default connect(mapStateToProps, { getAllCollections })(ShopPage);