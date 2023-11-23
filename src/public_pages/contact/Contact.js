import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import FormContact from './Components/formContact';
import Maps from './Components/Maps';

function Contact(props) {
    return (
        <>
            <Banniere desc="CONTACTEZ-NOUS" name="Contact" />
            <FormContact />
            <Maps />
        </>
    );
}

export default Contact;