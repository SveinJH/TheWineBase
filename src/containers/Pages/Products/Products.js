import React, { useEffect, useState } from 'react';
import ContentService from '../../../shared/services/contentService';

import { volumeFormatter } from '../../../shared/formats/productFormat';
import classes from './Products.module.scss';
import Product from '../../../components/Sections/Products/Product/Product';
import testProducts from '../../../shared/testData';

const imgURL = 'https://bilder.vinmonopolet.no/cache/300x300-0/';

const Products = props => {
    const [products, setProducts] = useState();
    const [mainCategory, setMainCategory] = useState();

    useEffect(() => {
        /* ContentService.getProducts({ category: mainCategory }).then(
            response => {
                setProducts(response.data);
            }
        ); */
        setProducts(testProducts);
    }, [mainCategory]);

    const handleProductClicked = id => {
        props.history.push(`/products/${id}`);
    };

    let renderedProducts = <div>Laster...</div>;

    if (products) {
        renderedProducts = products.map((prod, i) => {
            return (
                <Product
                    key={prod.basic.productId}
                    name={prod.basic.productShortName}
                    price={prod.prices[0].salesPrice}
                    volume={volumeFormatter(prod.basic.volume)}
                    category={prod.classification.subProductTypeName}
                    img={`${imgURL}${prod.basic.productId}-1.jpg`}
                    clicked={() => handleProductClicked(prod.basic.productId)}
                />
            );
        });
    }

    return <div className={classes.Products}>{renderedProducts}</div>;
};

export default Products;
