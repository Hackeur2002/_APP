import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function PMEForm(props) {
    return (
        <>
            <Banniere desc="FORMULAIRE DES PME" name="Formulaire des pme" />
            <Description />
        </>
    );
}

export default PMEForm;