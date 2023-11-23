import React from 'react';
import Banniere from './Components/banniere';
import Guide from './Components/guide';
import Evenement from './Components/Evenement';
import Actualite from './Components/Actualite';
import FAQ_home from './Components/FAQ_home';

function homepage(props) {
    return (
        <>
            <Banniere />
            <Actualite />
            <Guide />
            <Evenement />
            <FAQ_home />
        </>
    );
}

export default homepage;