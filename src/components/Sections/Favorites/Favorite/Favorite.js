import React from 'react';

import classes from './Favorite.module.scss';
import Button from '../../../UI/Button/Button';

const Favorite = props => {
    const attributes = [`${props.alcohol}%`, props.category].map(att => {
        return (
            <div key={att} className={classes.Favorite__attribute}>
                {att}
            </div>
        );
    });

    return (
        <div className={classes.Favorite}>
            <div className={classes.Favorite__imgContainer}>
                <img src={props.img} alt="" className={classes.Favorite__img} />
            </div>
            <div className={classes.Favorite__info}>
                <div className={classes.Favorite__name}>{props.name}</div>
                <div className={classes.Favorite__attributes}>{attributes}</div>
                <div className={classes.Favorite__rating}>
                    9 <span>/ 10</span> <div>DIN VURDERING</div>
                </div>
                <div className={classes.Favorite__buttons}>
                    <Button btnType="Basic" clicked={props.show}>
                        Vis
                    </Button>
                    <Button btnType="Basic" clicked={props.delete}>
                        Fjern
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Favorite;
