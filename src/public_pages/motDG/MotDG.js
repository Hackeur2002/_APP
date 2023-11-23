import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function MotDG(props) {
    return (
        <>
            <Banniere desc="MOT DU DIRECTEUR GENERAL" name="A propos / Mot du DG" />
            <Description />
        </>
    );
}

export default MotDG;