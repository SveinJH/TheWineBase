import React, { useState, useEffect } from 'react';
import ContentService from '../../../../shared/services/contentService';

import { volumeFormatter } from '../../../../shared/formats/productFormat';
import classes from './ProductOverview.module.scss';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

const imgUrl = 'https://bilder.vinmonopolet.no/cache/515x515-0/';

const ProductOverview = props => {
    const [product, setProduct] = useState();
    const [productId, setProductId] = useState(props.match.params.productId);

    useEffect(() => {
        ContentService.getProduct(productId).then(response => {
            setProduct(response.data[0]);
        });
    }, [productId]);

    const handleGoBack = () => {
        props.history.push('/products');
    };

    let renderedProduct = (
        <div className={classes.Product}>
            <Spinner />
        </div>
    );

    if (product) {
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
                                {product.prices[0].salesPrice}0 <span>NOK</span>
                            </div>
                            <div className={classes.Product__priceLiter}>
                                {product.prices[0].salesPricePrLiter} NOK /
                                Liter
                            </div>
                            <Button btnType="Default">
                                Legg til i favoritter
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return renderedProduct;
};

export default ProductOverview;
