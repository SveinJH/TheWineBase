import React, { useEffect, useState } from 'react';

import Store from '../../../components/Sections/Stores/Store/Store';
import classes from './Stores.module.scss';
import { testStores } from '../../../shared/testData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

const Stores = (props) => {
    const [stores, setStores] = useState();

    useEffect(() => {
        setStores(testStores);
    }, []);

    const handleStoreClicked = (id) => {
        console.log(props);
        props.history.push(`/butikker/${id}`);
    };

    let renderedStores = <Spinner />;
    if (stores) {
        renderedStores = stores.map((store) => {
            return (
                <Store
                    key={store.storeName}
                    name={store.storeName}
                    clicked={() => handleStoreClicked(store.storeId)}
                />
            );
        });
    }

    return (
        <div className={classes.Stores}>
            <div className="heading-1">Vinmonopolets butikker</div>
            <div className={classes.Stores__closest}>
                <Button btnType="Basic">Finn nærmeste</Button>
            </div>
            <div className={classes.Stores__container}>{renderedStores}</div>
        </div>
    );
};

export default Stores;
