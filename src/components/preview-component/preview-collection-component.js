import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection-component.scss";

const PreviewCollection = ({ title, items }) => {

    const renderItems = () => {
        return items.filter((item, index) => index < 4).map((item, index) => {
            return <CollectionItem key={index} item={item} />
        });
    }

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {renderItems()}
            </div>
        </div>
    )
}

export default PreviewCollection;