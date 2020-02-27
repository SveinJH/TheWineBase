import React from 'react';

import classes from './Home.module.scss';
import Category from '../../../components/Sections/Home/Category/Category';

const categories = ['Beer', 'Wine', 'Liquor'];

const Home = () => {
    return (
        <div className={classes.Home}>
            <div className="heading-2">Browse our products</div>
            <div className={classes.Home__categories}>
                {categories.map(category => {
                    return <Category />;
                })}
            </div>
        </div>
    );
};

export default Home;
