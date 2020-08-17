export const favorites = (email) => {
    return {
        structuredQuery: {
            select: {
                fields: [{ fieldPath: 'favorites' }],
            },
            from: [{ collectionId: 'users' }],
            where: {
                fieldFilter: {
                    field: { fieldPath: 'email' },
                    op: 'EQUAL',
                    value: { stringValue: email },
                },
            },
        },
    };
};

export const createUser = (email) => {
    return {
        fields: {
            favorites: { arrayValue: { values: [] } },
            email: { stringValue: email },
        },
    };
};

export const updateFavorites = (favorites) => {
    const favs = favorites.map((fav) => {
        return {
            mapValue: {
                fields: {
                    id: { integerValue: fav.id },
                    rating: { integerValue: fav.rating },
                },
            },
        };
    });

    return {
        fields: {
            favorites: { arrayValue: { values: favs } },
        },
    };
};
