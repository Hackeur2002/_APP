import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function EService(props) {
    return (
        <>
            <Banniere desc="E-SERVICE" name="Autres services / E-service" />
            <Description />
        </>
    );
}

export default EService;