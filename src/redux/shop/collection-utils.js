export const getCollection = (collection, param) => {

    const grouped = collection.reduce((obj, item) => {
        if (item.routeName === param) {
            obj[item.routeName] = obj[param] || [];
            obj[item.routeName].push(item)
        }
        return obj;
    }, {});

    return grouped[param];
}