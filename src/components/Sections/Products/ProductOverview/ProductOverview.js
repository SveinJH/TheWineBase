import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ContentService from '../../../../shared/services/contentService';

import * as actions from '../../../../store/actions/index';
import {
    volumeFormatter,
    priceFormatter,
} from '../../../../shared/formats/productFormat';
import classes from './ProductOverview.module.scss';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

const imgUrl = 'https://bilder.vinmonopolet.no/cache/515x515-0/';

const ProductOverview = (props) => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [isFavorite, setIsFavorite] = useState(false);

    const { favoriteIds, documentId, updateFavorites } = props;

    useEffect(() => {
        ContentService.getProduct(productId).then((response) => {
            setProduct(response.data[0]);
        });
    }, [productId]);

    useEffect(() => {
        if (product) {
            if (favoriteIds.includes(product.basic.productId)) {
                setIsFavorite(true);
            } else {
                setIsFavorite(false);
            }
        }
    }, [product, favoriteIds]);

    const handleGoBack = () => {
        props.history.goBack();
    };

    const addFavorite = (productId) => {
        const updatedIds = [...favoriteIds];
        updatedIds.push(productId);
        return { ids: updatedIds, documentId };
    };

    const removeFavorite = (productId) => {
        const updatedIds = favoriteIds.filter((id) => id !== productId);
        return { ids: updatedIds, documentId };
    };

    let renderedProduct = (
        <div className={classes.Product}>
            <Spinner />
        </div>
    );

    if (product) {
        let button = (
            <Button
                btnType="Default"
                clicked={() =>
                    updateFavorites(addFavorite(product.basic.productId))
                }
            >
                Legg til i favoritter
            </Button>
        );
        if (isFavorite) {
            button = (
                <Button
                    btnType="Default"
                    clicked={() =>
                        updateFavorites(removeFavorite(product.basic.productId))
                    }
                >
                    Fjern fra favoritter
                </Button>
            );
        }

        renderedProduct = (
            <div className={classes.Product}>
                <Button clicked={handleGoBack} btnType="Default">
                    Tilbake
                </Button>
                <div className={classes.Product__container}>
                    <img
                        className={classes.Product__img}
                        src={`${imgUrl}${productId}-1.jpg`}
                        alt="Product"
                    />
                    <div className={classes.Product__info}>
                        <div className={classes.Product__category__main}>
                            {product.classification.subProductTypeName}
                        </div>
                        <div className={classes.Product__name}>
                            {product.basic.productShortName}
                        </div>
                        <div className={classes.Product__origin}>
                            {product.origins.origin.country},{' '}
                            {product.origins.origin.region}
                        </div>
                        <div className={classes.Product__description}>
                            {product.description.characteristics.taste}
                        </div>
                        <div className={classes.Product__infoContainer}>
                            <div className={classes.Product__volume}>
                                <p>Volum</p>
                                <div>
                                    {volumeFormatter(product.basic.volume)}
                                </div>
                            </div>
                            <div className={classes.Product__percent}>
                                <p>Alkoholprosent</p>
                                {product.basic.alcoholContent}%
                            </div>
                            <div className={classes.Product__price}>
                                {priceFormatter(product.prices[0].salesPrice)}{' '}
                                <span>NOK</span>
                            </div>
                            <div className={classes.Product__priceLiter}>
                                {product.prices[0].salesPricePrLiter} NOK /
                                Liter
                            </div>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return renderedProduct;
};

const mapStateToProps = (state) => {
    return {
        favoriteIds: state.fav.favoriteIds,
        documentId: state.fav.documentId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFavorites: (data) =>
            dispatch(actions.updateFavorites(data.ids, data.documentId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview);
