export const generateQuery = query => {
    const updatedQuery = [];

    if (query.search) {
        updatedQuery.push(
            `productShortNameContains=${query.search.replace(/ /g, '_')}`
        );
    }
    if (query.maxResults) {
        updatedQuery.push(`maxResults=${query.maxResults}`);
    }
    if (query.start) {
        updatedQuery.push(`start=${query.start}`);
    }

    let queryString = `?${updatedQuery.join('&')}`;
    return queryString;
};
