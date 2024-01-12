import React from 'react';
import { ProjetsListe } from '../../../../NoSQL';
import soutien from '../Images/soutien.png'
import secteur from '../Images/secteurs.png'
import statut from '../Images/status.png'
import cal from '../Images/calendrier.png'
import org from '../Images/organisation.png'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Description(props) {
    const event = ProjetsListe.filter((event) => event.title === props.name)

    if (event.length === 0) {
        return <div>Aucun événement trouvé avec le titre {props.name}</div>;
    }

    const selectedEvent = event[0];
    return (
        <>
            <div className='max-xl:px-4 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div>
                    <img className="w-full h-full animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-linear rounded-lg" src={selectedEvent.image} alt="office content 2" />
                </div>
                <br />
                <span className='text-4xl font-bold'>{props.name}</span>
                <div className="max-xl:flex max-xl:flex-col grid grid-cols-2 gap-4 mt-10 max-xl:ml-0 ml-10">
                    <div>
                        <div className="grid max-xl:grid-rows-0 grid-rows-6 grid-flow-col gap-4 max-xl:gap-0">
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
                                {selectedEvent.statut == "bt" ? (<span className='max-xl:text-amber-500 max-xl:bg-transparent bg-amber-500 rounded-full text-white text-sm max-w-max text-center p-1'>Bientôt terminée</span>)
                                    : selectedEvent.statut == "o" ? (<span className='max-xl:text-green-500 max-xl:bg-transparent bg-green-500 rounded-full text-white text-sm max-w-max text-center p-1'>Ouvert</span>)
                                        : (<span className='max-xl:text-red-500 bg-red-500 max-xl:bg-transparent  rounded-full text-white text-sm max-w-max text-center p-1'>Terminée</span>)}
                            </div>
                            <div className='inline-flex'>
                                <img className="w-5 h-5" src={cal} />&nbsp;
                                <span className='text-sm font-bold'>Se termine: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.datefin}</span>
                            </div>
                            {selectedEvent.orga ? (
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={org} />&nbsp;
                                    <span className='text-sm font-bold'>Organisation: </span>&nbsp;&nbsp;<span className='text-sm'>{selectedEvent.orga}</span>
                                </div>
                            ) : ("")}

                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='text-sm text-center font-bold'>LOGO DE L'ORGANISATEUR</span>
                        </div>
                        <img src={selectedEvent.lienLogo} width={250} height={250} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="prose prose-xl text-justify w-full mt-5 max-w-none">
                        <ReactMarkdown className='w-full max-w-none' remarkPlugins={[remarkGfm]}>
                            {selectedEvent.description}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='mt-5'>
                    <a href={selectedEvent.lienIns} target='_blank'>
                        <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                            Postuler
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Description;