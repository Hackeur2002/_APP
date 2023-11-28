import React from 'react';
import { ProjetsListe } from '../../../../NoSQL';
import soutien from '../Images/soutien.png'
import secteur from '../Images/secteurs.png'
import statut from '../Images/status.png'
import cal from '../Images/calendrier.png'
import org from '../Images/organisation.png'

function Description(props) {
    const event = ProjetsListe.filter((event) => event.title === props.name)

    if (event.length === 0) {
        return <div>Aucun événement trouvé avec le titre {props.name}</div>;
    }

    const selectedEvent = event[0];
    return (
        <>
            <div className='max-xl:px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <span className='text-4xl font-bold'>{props.name}</span>
                <div className="max-md:flex max-md:flex-col grid grid-cols-2 gap-4 mt-10 ml-10">
                    <div>
                        <div className="grid grid-rows-6 grid-flow-col gap-4">
                            <div>
                                <span className='text-xl font-bold'>Infos Général</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={soutien} />&nbsp;
                                <span className='text-sm font-bold'>Type de soutien: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.soutien}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={secteur} />&nbsp;
                                <span className='text-sm font-bold'>Secteur: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.secteur}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={statut} />&nbsp;
                                <span className='text-sm font-bold'>Statut: </span>&nbsp;&nbsp;
                                {selectedEvent.statut == "bt" ? (<span className='bg-amber-500 rounded-full text-white text-sm max-w-max p-1 text-center'>Bientôt terminée</span>)
                                    : selectedEvent.statut == "o" ? (<span className='bg-green-500 rounded-full text-white text-sm max-w-max p-1 text-center'>Ouvert</span>)
                                        : (<span className='bg-red-500 rounded-full text-white text-sm max-w-max p-1 text-center'>Terminée</span>)}
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={cal} />&nbsp;
                                <span className='text-sm font-bold'>Se termine: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.date}</span>
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={org} />&nbsp;
                                <span className='text-sm font-bold'>Organisation: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.orga}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='text-sm text-center font-bold'>LOGO DE L'ORGANISATEUR</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                        Postuler
                    </button>
                </div>
            </div>
        </>
    );
}

export default Description;