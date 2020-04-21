import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from './Map/Map';
import ContentService from '../../../../shared/services/contentService';
import { testStores } from '../../../../shared/testData';
import Button from '../../../UI/Button/Button';
import classes from './StoreOverview.module.scss';
import Spinner from '../../../UI/Spinner/Spinner';

const StoreOverview = (props) => {
    const { storeId } = useParams();
    const [store, setStore] = useState();

    useEffect(() => {
        ContentService.getStore(storeId).then((response) => {
            setStore(response.data[0]);
        });
    }, [storeId]);

    const handleGoBack = () => {
        props.history.goBack();
    };

    let renderedStore = <Spinner />;
    if (store) {
        const coordinates = store.address.gpsCoord.split(';');
        console.log(coordinates);
        renderedStore = (
            <>
                <Button clicked={handleGoBack} btnType="Default">
                    Tilbake
                </Button>

                <div className="heading-2">{store.storeName}</div>
                <div className={classes.Store__container}>
                    <div className={classes.Store__map}>
                        <Map
                            lat={parseFloat(coordinates[0])}
                            long={parseFloat(coordinates[1])}
                            name={store.storeName}
                        />
                    </div>
                    <div className={classes.Store__info}>
                        <div>
                            <div>Adresse</div>
                            <div>
                                {store.address.street}
                                <div>
                                    {store.address.postalCode}{' '}
                                    {store.address.city}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>E-post</div>
                            <div>{store.email}</div>
                        </div>
                        <div>
                            <div>Telefon</div>
                            <div>{store.telephone}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return <div className={classes.Store}>{renderedStore}</div>;
};

export default StoreOverview;
