import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere'
import LesServicesNonFinancier from './Components/LesServicesNonFinancier';
import LesServicesFinancier from './Components/LesServicesFinancier';

function Service(props) {
    return (
        <>
            <Banniere desc="SERVICES" name="Autres services / Services" />
            <LesServicesNonFinancier />
            <LesServicesFinancier />
        </>
    );
}

export default Service;