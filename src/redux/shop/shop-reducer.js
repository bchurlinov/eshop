import SHOP_DATA from "./collections_data";
import { CollectionTypes } from "./collection-types";
import { getCollection } from "./collection-utils";

const initialState = {
    collection: SHOP_DATA,
    singleCollection: []
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case CollectionTypes.GET_COLLECTION:
            return {
                ...state,
                singleCollection: getCollection(state.collection, action.payload)
            }
        case CollectionTypes.GET_ALL_COLLECTIONS:
            return {
                ...state,
                collection: SHOP_DATA
            }
        default:
            return state;
    }
}

export default shopReducer;