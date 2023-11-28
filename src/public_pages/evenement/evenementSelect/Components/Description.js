import React from 'react';
import calendrier from '../Images/calendrier.png';
import lieu from '../Images/broche-de-localisation.png';
import mode from '../Images/mode-de-paiement.png';
import langue from '../Images/langue.png'
import { EvenemntsLists } from '../../../../NoSQL';

function Description(props) {
    const event = EvenemntsLists.flatMap((ev) =>
        ev.type.flatMap((et) =>
            et.contenu.filter((event) => event.titre === props.name)
        )
    );

    if (event.length === 0) {
        return <div>Aucun événement trouvé avec le titre {props.name}</div>;
    }

    const selectedEvent = event[0];
    return (
        <>
            <div className='max-xl:px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <span className='text-xl font-bold'>{props.name}</span>
                <div className="max-md:flex max-md:flex-col grid grid-cols-4 gap-4 mt-10 ml-10 mb-10">
                    <div>
                        <div className="grid grid-rows-5 grid-flow-col gap-4">
                            <div>
                                <span className='text-2sm font-bold'>Infos Général</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={calendrier} />&nbsp;
                                <span className='text-sm'>{selectedEvent.date}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={lieu} />&nbsp;
                                <span className='text-sm'>{selectedEvent.lieu}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={mode} />&nbsp;
                                <span className='text-sm'>{selectedEvent.prix}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={langue} />&nbsp;
                                <span className='text-sm'>{selectedEvent.langue}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-rows-4 grid-flow-col gap-4">
                            <div>
                                <span className='text-2sm font-bold'>Adresse</span>
                            </div>
                            <div>
                                {selectedEvent.adresse}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-rows-4 grid-flow-col gap-4">
                            <div>
                                <span className='text-2sm font-bold'>Organisateur</span>
                            </div>
                            <div>
                                <span className='text-sm font-bold'>Nom de l'Organisateur</span>
                            </div>
                            <div>
                                <span className='text-sm'>Email : </span>
                            </div>
                            <div>
                                <span className='text-sm'>Téléphone :</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='text-2sm text-center font-bold'>LOGO DE L'ORGANISATEUR</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                        Je m'inscris
                    </button>
                </div>
            </div>
        </>
    );
}

export default Description;