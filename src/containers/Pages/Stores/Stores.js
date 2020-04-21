import React, { useEffect, useState } from 'react';
import { findNearest } from 'geolib';

import Store from '../../../components/Sections/Stores/Store/Store';
import classes from './Stores.module.scss';
//import { testStores } from '../../../shared/testData';
import stores from '../../../shared/data/stores.json';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

const Stores = props => {
    //const [stores, setStores] = useState();
    const [closest, setClosest] = useState();

    /* useEffect(() => {
        setStores(stores);
    }, [stores]); */

    const handleStoreClicked = id => {
        console.log(props);
        props.history.push(`/butikker/${id}`);
    };

    const findClosestStore = position => {
        console.log(position);

        const coords = getCoordinatesArray();
        const closest = findNearest(
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            },
            coords
        );
        const closestFormatted = `${closest.latitude};${closest.longitude}`;
        const closestStore = stores.filter(store => {
            return store.address.gpsCoord === closestFormatted;
        });

        setClosest(closestStore[0]);
    };

    const handleFindClosest = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(findClosestStore, err => {
                alert(err.message);
                setClosest();
            });
        }
    };

    const getCoordinatesArray = () => {
        if (stores) {
            const coordinates = stores.map(store => {
                const coords = store.address.gpsCoord.split(';');
                return {
                    //id: store.storeId,
                    latitude: coords[0],
                    longitude: coords[1]
                };
            });
            return coordinates;
        }
    };

    let renderedStores = <Spinner />;
    if (stores) {
        renderedStores = stores.sort((a, b) => {
            if (a.storeName < b.storeName) return -1;
            if (a.storeName > b.storeName) return 1;
            return 0;
        });
        renderedStores = renderedStores.map(store => {
            return (
                <Store
                    key={store.storeName}
                    name={store.storeName}
                    clicked={() => handleStoreClicked(store.storeId)}
                />
            );
        });
    }

    let renderedClosestStore = '';
    if (closest) {
        renderedClosestStore = (
            <Store
                name={closest.storeName}
                clicked={() => handleStoreClicked(closest.storeId)}
            />
        );
    }

    return (
        <div className={classes.Stores}>
            <div className="heading-1">Vinmonopolets butikker</div>
            <div className={classes.Stores__closest}>
                <Button clicked={handleFindClosest} btnType="Basic">
                    Finn nærmeste
                </Button>
                {renderedClosestStore}
            </div>
            <div className={classes.Stores__container}>{renderedStores}</div>
        </div>
    );
};

export default Stores;
