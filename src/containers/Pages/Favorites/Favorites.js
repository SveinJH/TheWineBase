import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ContentService from '../../../shared/services/contentService';
import classes from './Favorites.module.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import testData from '../../../shared/testData';
import Favorite from '../../../components/Sections/Favorites/Favorite/Favorite';

const imgUrl = 'https://bilder.vinmonopolet.no/cache/300x300-0/';

const Favorites = props => {
    const [favorites, setFavorites] = useState();

    const { favoriteIds, documentId, updateFavorites, loading, error } = props;

    useEffect(() => {
        if (favoriteIds) {
            ContentService.getProductsByIds(favoriteIds).then(data => {
                console.log(data);
                setFavorites(data);
            });
        }
        //setFavorites(testData.slice(0, 4));
    }, [favoriteIds]);

    const removeItem = productId => {
        const updatedArr = favoriteIds.filter(id => id !== productId);
        return { ids: updatedArr, documentId };
    };

    const showProduct = productId => {
        props.history.push(`/produkter/${productId}`);
    };

    let renderedFavorites = <Spinner />;
    if (favorites) {
        renderedFavorites = favorites.map(favorite => {
            return (
                <Favorite
                    key={favorite.basic.productId}
                    name={favorite.basic.productShortName}
                    img={`${imgUrl}${favorite.basic.productId}-1.jpg`}
                    alcohol={favorite.basic.alcoholContent}
                    category={favorite.classification.subProductTypeName}
                    show={() => showProduct(favorite.basic.productId)}
                    delete={() =>
                        updateFavorites(removeItem(favorite.basic.productId))
                    }
                />
            );
        });
    }

    let content = (
        <div className={classes.Favorites__container}>{renderedFavorites}</div>
    );
    if (loading) content = <Spinner />;

    return (
        <div className={classes.Favorites}>
            <div className="heading-1">Dine favoritter</div>
            {content}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        favoriteIds: state.fav.favoriteIds,
        documentId: state.fav.documentId,
        error: state.fav.error,
        loading: state.fav.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateFavorites: data =>
            dispatch(actions.updateFavorites(data.ids, data.documentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
