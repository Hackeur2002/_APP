import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import LesProjets from './Components/LesProjets';

function Projet(props) {
    return (
        <>
            <Banniere desc="PROJETS" name="Actualités / Projets" />
            <LesProjets />
        </>
    );
}

export default Projet;