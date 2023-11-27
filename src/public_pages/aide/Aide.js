import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function Aide(props) {
    return (
        <>
            <Banniere desc="BESOIN D'AIDE ?" name="Autres services / Besoin d'aide ?" />
            <Description />
        </>
    );
}

export default Aide;