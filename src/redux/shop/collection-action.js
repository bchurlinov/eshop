import { CollectionTypes } from "./collection-types";

export const getCollection = collection => ({
    type: CollectionTypes.GET_COLLECTION,
    payload: collection
});

export const getAllCollections = () => ({
    type: CollectionTypes.GET_ALL_COLLECTIONS
});
