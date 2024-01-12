import React from 'react';
import calendrier from '../Images/calendrier.png';
import lieu from '../Images/broche-de-localisation.png';
import mode from '../Images/mode-de-paiement.png';
import langue from '../Images/langue.png'
import { EvenemntsLists } from '../../../../NoSQL';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Description(props) {
    let tabevent = EvenemntsLists.flatMap((ev) =>
        ev.type.flatMap((et) =>
            et.contenu.filter((etf) => etf.titre === props.name)
        )
    );

    if (tabevent.length === 0) {
        return <div>Aucun événement trouvé avec le titre {props.name}</div>;
    } else {
        console.log(`Nombre d'événements trouvés: ${tabevent.length}`);
        console.log('Événement sélectionné:', tabevent[0]);
    }
    // console.log(tabevent.length)
    // console.log(tabevent)
    const selectedEvent = tabevent[0];
    return (
        <>
            <div className='max-xl:px-4 px-20 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
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
                        <div className="grid grid-rows-2 grid-flow-col">
                            <div>
                                <span className='text-2sm font-bold'>Adresse</span>
                            </div>
                            <div>
                                {selectedEvent.adresse}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-rows-4 grid-flow-col">
                            <div>
                                <span className='text-2sm font-bold'>Organisateur</span>
                            </div>
                            <div>
                                <span className='text-sm font-bold'>{selectedEvent.organisateur}</span>
                            </div>
                            <div>
                                <span className='text-sm'>Email : {selectedEvent.mail}</span>
                            </div>
                            <div>
                                <span className='text-sm'>Téléphone : {selectedEvent.tel}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='text-2sm text-center font-bold'>LOGO DE L'ORGANISATEUR</span>
                        </div>
                        <img src={selectedEvent.logo} width={250} height={250} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="prose prose-xl text-justify w-full mt-5 max-w-none text-black">
                        <ReactMarkdown className='w-full max-w-none' remarkPlugins={[remarkGfm]}>
                            {selectedEvent.description}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='mt-5'>
                    <a href={selectedEvent.lienIns} target='_blank'>
                        <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                            Je m'inscris
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Description;