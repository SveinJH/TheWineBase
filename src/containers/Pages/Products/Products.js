import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContentService from '../../../shared/services/contentService';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { volumeFormatter } from '../../../shared/formats/productFormat';
import classes from './Products.module.scss';
import Product from '../../../components/Sections/Products/Product/Product';
import { testProducts } from '../../../shared/testData';

const imgURL = 'https://bilder.vinmonopolet.no/cache/300x300-0/';

const Products = (props) => {
    const [filter, setFilter] = useState({
        search: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Søk etter produkter',
            },
            value: '',
            validation: {},
            valid: true,
        },
    });
    const [products, setProducts] = useState();
    const [mainCategory, setMainCategory] = useState();

    const { favoriteIds } = props;

    useEffect(() => {
        /* ContentService.getProducts({ category: mainCategory }).then(
            response => {
                setProducts(response.data);
            }
        ); */

        const prods = [...testProducts];
        prods.forEach((prod) => {
            if (favoriteIds.includes(prod.basic.productId)) {
                prod.basic.isFavorite = true;
            } else {
                prod.basic.isFavorite = false;
            }
        });

        setProducts(prods);
    }, [mainCategory, favoriteIds]);

    const handleProductClicked = (id) => {
        props.history.push(`/produkter/${id}`);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const query = { search: filter.search.value, maxResults: 20 };
        ContentService.getProducts(query).then((res) => {
            setProducts(res.data);
        });
    };

    const inputChangedHandler = (event, id) => {
        const updatedFilter = {
            ...filter,
            [id]: {
                ...filter[id],
                value: event.target.value,
            },
        };
        setFilter(updatedFilter);
    };

    let renderedProducts = <div>Laster...</div>;

    if (products) {
        renderedProducts = products.map((prod, i) => {
            return (
                <Product
                    isFavorite={prod.basic.isFavorite}
                    key={prod.basic.productId}
                    name={prod.basic.productShortName}
                    price={prod.prices[0].salesPrice.toFixed(2)}
                    volume={volumeFormatter(prod.basic.volume)}
                    category={prod.classification.subProductTypeName}
                    img={`${imgURL}${prod.basic.productId}-1.jpg`}
                    clicked={() => handleProductClicked(prod.basic.productId)}
                />
            );
        });
    }

    const filterElements = Object.keys(filter).map((el) => {
        return {
            id: el,
            config: filter[el],
        };
    });
    let filters = filterElements.map((el) => {
        return (
            <Input
                key={el.id}
                elementType={el.config.elementType}
                elementConfig={el.config.elementConfig}
                value={el.config.value}
                changed={(event) => inputChangedHandler(event, el.id)}
            />
        );
    });

    return (
        <div className={classes.Products}>
            <div className={classes.Products__filter}>
                <form
                    className={classes.Products__filterForm}
                    onSubmit={handleSearch}
                >
                    {filters}
                    <Button btnType="Basic">Søk</Button>
                </form>
            </div>
            <div className={classes.Products__container}>
                {renderedProducts}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favoriteIds: state.fav.favoriteIds,
    };
};

export default connect(mapStateToProps)(Products);
