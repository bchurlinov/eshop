import React, { Component } from "react";
import { collections } from "./collections_data";
import CollectionPreview from "../../components/preview-component/preview-collection-component";

class ShopPage extends Component {

    state = {
        collection: collections
    }

    renderCollection = () => {
        return this.state.collection && this.state.collection.map(({ id, ...props }) => {
            return (
                <CollectionPreview
                    key={id}
                    {...props}
                />
            )
        });
    }

    render() {
        return (
            <div className="shop-page">
                {this.renderCollection()}
            </div>
        )
    }
}

export default ShopPage;