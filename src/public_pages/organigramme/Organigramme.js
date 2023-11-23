import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function Organigramme() {
    return (
        <>
            <Banniere desc="ORGANIGRAMME" name="A propos / Organigramme" />
            <Description />
        </>
    );
}

export default Organigramme;