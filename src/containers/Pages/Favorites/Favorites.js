import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ContentService from '../../../shared/services/contentService';
import classes from './Favorites.module.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { testProducts } from '../../../shared/testData';
import Favorite from '../../../components/Sections/Favorites/Favorite/Favorite';

const imgUrl = 'https://bilder.vinmonopolet.no/cache/300x300-0/';

const Favorites = (props) => {
    const [favorites, setFavorites] = useState();

    const { favs, documentId, updateFavorites, loading, error } = props;

    useEffect(() => {
        if (favs) {
            console.log(favs);
            const ids = favs.map((fav) => fav.id);
            ContentService.getProductsByIds(ids).then((data) => {
                console.log(data);
                data.forEach((item, i) => (item.basic.rating = favs[i].rating));
                setFavorites(data);
            });
        }
        //setFavorites(testProducts.slice(0, 4));
    }, [favs]);

    const removeItem = (productId) => {
        const updatedArr = favs.filter((fav) => fav.id !== productId);
        return { favs: updatedArr, documentId };
    };

    const showProduct = (productId) => {
        props.history.push(`/produkter/${productId}`);
    };

    const removeRating = (productId) => {
        const updatedArr = [...favs];
        updatedArr.forEach((fav) => {
            if (fav.id == productId) fav.rating = -1;
        });
        return { favs: updatedArr, documentId };
    };

    const addRating = (productId, rating) => {
        const updatedArr = [...favs];
        updatedArr.forEach((fav) => {
            if (fav.id == productId) fav.rating = rating;
        });
        return { favs: updatedArr, documentId };
    };

    let renderedFavorites = <Spinner />;
    if (favorites) {
        renderedFavorites = favorites.map((favorite) => {
            return (
                <Favorite
                    addRating={(rating) =>
                        updateFavorites(
                            addRating(favorite.basic.productId, rating)
                        )
                    }
                    removeRating={() =>
                        updateFavorites(removeRating(favorite.basic.productId))
                    }
                    rating={favorite.basic.rating}
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

const mapStateToProps = (state) => {
    return {
        favs: state.fav.favs,
        documentId: state.fav.documentId,
        error: state.fav.error,
        loading: state.fav.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFavorites: (data) =>
            dispatch(actions.updateFavorites(data.favs, data.documentId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
