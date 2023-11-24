import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import LesEvenements from './Components/LesEvenements';

function Evenement(props) {
    return (
        <>
            <Banniere desc="EVENEMENT" name="Actualités / Evènements" />
            <LesEvenements />
        </>
    );
}

export default Evenement;