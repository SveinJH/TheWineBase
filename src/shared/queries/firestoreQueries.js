export const favorites = email => {
    return {
        structuredQuery: {
            select: {
                fields: [{ fieldPath: 'favorites' }]
            },
            from: [{ collectionId: 'users' }],
            where: {
                fieldFilter: {
                    field: { fieldPath: 'email' },
                    op: 'EQUAL',
                    value: { stringValue: email }
                }
            }
        }
    };
};

export const createUser = email => {
    return {
        fields: {
            favorites: { arrayValue: { values: [] } },
            email: { stringValue: email }
        }
    };
};

export const updateFavorites = favoriteIds => {
    const ids = favoriteIds.map(id => {
        return {
            integerValue: id
        };
    });

    return {
        fields: {
            favorites: { arrayValue: { values: ids } }
        }
    };
};
