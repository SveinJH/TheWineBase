import React from 'react';

import Icon from '../../../UI/Icon/Icon';
import classes from './Product.module.scss';

const Product = props => {
    return (
        <div className={classes.Product} onClick={props.clicked}>
            <img className={classes.Product__img} src={props.img} alt="" />
            <div className={classes.Product__info}>
                <div className={classes.Product__category}>
                    {props.category}
                </div>
                <div className={classes.Product__volume}>{props.volume}</div>
                <div className="heading-4" style={{ lineHeight: '1.2' }}>
                    {props.name}
                </div>
                <div
                    className={['heading-5', classes.Product__price].join(' ')}
                >
                    {props.price}0{' '}
                    <span style={{ fontSize: '1.4rem', color: '#333' }}>
                        NOK
                    </span>
                </div>
            </div>
            <div className={classes.Product__heart}>
                <Icon size={32} name={'heart'} />
            </div>
        </div>
    );
};

export default Product;
