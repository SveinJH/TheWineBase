import React, { useState } from 'react';

import classes from './Favorite.module.scss';
import Button from '../../../UI/Button/Button';

const Favorite = (props) => {
    const [showOptions, setShowOptions] = useState();

    const attributes = [`${props.alcohol}%`, props.category].map((att) => {
        return (
            <div key={att} className={classes.Favorite__attribute}>
                {att}
            </div>
        );
    });

    const showRatingOptions = () => {
        if (showOptions) {
            setShowOptions(null);
        } else {
            const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const optionButtons = options.map((option) => {
                return (
                    <Button
                        key={option}
                        clicked={() => props.addRating(option)}
                        btnType="Option"
                    >
                        {option}
                    </Button>
                );
            });
            setShowOptions(
                <div className={classes.Favorite__options}>{optionButtons}</div>
            );
        }
    };

    let rating = (
        <Button clicked={showRatingOptions} btnType="Rating">
            Legg til vurdering
        </Button>
    );
    if (props.rating > -1) {
        rating = (
            <>
                <div className={classes.Favorite__rating}>
                    {props.rating} <span>/ 10</span>
                    <div>DIN VURDERING</div>
                </div>
                <Button clicked={props.removeRating} btnType="Remove">
                    X
                </Button>
            </>
        );
    }

    return (
        <div className={classes.Favorite}>
            <div className={classes.Favorite__imgContainer}>
                <img src={props.img} alt="" className={classes.Favorite__img} />
            </div>
            <div className={classes.Favorite__info}>
                <div className={classes.Favorite__name}>{props.name}</div>
                <div className={classes.Favorite__attributes}>{attributes}</div>
                <div className={classes.Favorite__ratings}>{rating}</div>
                {showOptions ? showOptions : null}
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
