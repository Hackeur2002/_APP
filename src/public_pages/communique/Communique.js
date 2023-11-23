import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import LesCommunique from './Components/LesCommunique';

function Communique(props) {
    return (
        <>
            <Banniere desc="COMMUNIQUE" name="Actualités / Communiqué" />
            <LesCommunique />
        </>
    );
}

export default Communique;