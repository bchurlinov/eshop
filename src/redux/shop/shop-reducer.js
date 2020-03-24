import SHOP_DATA from "./collections_data";

const initialState = {
    collection: SHOP_DATA
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;