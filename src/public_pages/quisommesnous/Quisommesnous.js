import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function Quisommesnous(props) {
    return (
        <>
            <Banniere desc="QUI SOMMES-NOUS ?" name="A propos / Qui somme nous ?" />
            <Description />
        </>
    );
}

export default Quisommesnous;