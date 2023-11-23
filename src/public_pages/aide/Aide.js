import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function Aide(props) {
    return (
        <>
            <Banniere desc="QUI PEUT M'AIDER ?" name="Autres services / Qui peut m'aider ?" />
            <Description />
        </>
    );
}

export default Aide;