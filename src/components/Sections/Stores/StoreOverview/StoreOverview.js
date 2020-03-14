import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from './Map/Map';

import { testStores } from '../../../../shared/testData';

import classes from './StoreOverview.module.scss';
import Spinner from '../../../UI/Spinner/Spinner';

const StoreOverview = props => {
    const { storeId } = useParams();
    const [store, setStore] = useState();

    useEffect(() => {
        setStore(testStores[0]);
        console.log(testStores[0]);
    }, []);

    let renderedStore = <Spinner />;
    if (store) {
        const coordinates = store.address.gpsCoord.split(';');
        console.log(coordinates);
        renderedStore = (
            <>
                <div className="heading-2">{store.storeName}</div>
                <div className={classes.Store__container}>
                    <div className={classes.Store__map}>
                        <Map
                            lat={parseFloat(coordinates[0])}
                            long={parseFloat(coordinates[1])}
                            name={store.storeName}
                        />
                    </div>
                    <div className={classes.Store__info}></div>
                </div>
            </>
        );
    }
    return <div className={classes.Store}>{renderedStore}</div>;
};

export default StoreOverview;
