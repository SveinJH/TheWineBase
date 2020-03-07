import React from 'react';

import classes from './Home.module.scss';
import Category from '../../../components/Sections/Home/Category/Category';
import beer from '../../../images/SVG/category0.svg';
import wine from '../../../images/SVG/category1.svg';
import liquor from '../../../images/SVG/category2.svg';

const categories = [
    {
        text: 'Øl',
        svg: beer
    },
    {
        text: 'Vin',
        svg: wine
    },
    {
        text: 'Brennevin',
        svg: liquor
    }
];

const Home = props => {
    const handleCategoryClick = () => {
        props.history.push('/products');
    };

    return (
        <div className={classes.Home}>
            <div className="heading-2">Søk blant tusenvis av produkter</div>
            <div className={classes.Home__categories}>
                {categories.map(category => {
                    return (
                        <Category
                            key={category.text}
                            text={category.text}
                            icon={category.svg}
                            clicked={handleCategoryClick}
                        />
                    );
                })}
            </div>
            <div className={classes.Home__findStores}>
                Finn en butikk nær deg
            </div>
        </div>
    );
};

export default Home;
