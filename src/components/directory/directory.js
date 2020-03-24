import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

const Directory = ({ directory }) => {

    return (
        <div className="directory-menu">
            {directory && directory.sections.map((item, index) => {
                return <MenuItem
                    key={index}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    size={item.size}
                />
            })}
        </div>
    )
}

const mapStateToProps = ({ directory }) => ({
    directory
});

export default connect(mapStateToProps, null)(Directory);