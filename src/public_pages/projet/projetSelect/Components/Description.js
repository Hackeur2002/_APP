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
            <div className='max-xl:px-14 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div>
                    <img className="w-full h-full animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-linear rounded-lg" src={selectedEvent.image} alt="office content 2" />
                </div>
                <br />
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
                    <p>
                        <b>RISE</b> est une initiative du Gouvernement de la République du Bénin conçue pour accélérer la croissance des PME et jeunes entreprises innovantes à fort potentiel.
                    </p><br />
                    <p>
                        RISE accompagne la croissance et la résilience des PME en offrant un <b>appui financier combiné à une assistance technique</b>. Elle participe à la création d’emplois, à la création de richesses et au renforcement de l’inclusion économique et sociale. RISE permettra aux PME de renforcer leur attractivité et éligibilité à des financements innovants.
                    </p><br />
                    <p>
                        L’appui financier concerne l’acquisition d’actifs immatériels (certification, labélisation, brevet, etc.) et la prise en charge de certaines prestations de services (études de marchés, plans d’affaires, assistance comptable et juridique, etc.). Le financement d’actifs monnayables (équipements, matériels, etc.) ne fait pas partie des dépenses éligibles.
                    </p><br />
                    <p>
                        RISE est une initiative inclusive vis-à-vis des femmes et des jeunes. Le projet entend contribuer au développement du secteur privé béninois en donnant accès à toutes les PME aux mêmes opportunités sur l’ensemble du territoire.
                    </p><br />
                    <p>
                        RISE est mis en oeuvre par l’Agence de développement de Sèmè City (Sèmè City) et l’Agence de Développement des PME (ADPME) sous l’impulsion du Ministère de l’Economie et des Finances (MEF) et avec l’appui de la Banque mondiale, de l’Agence Française de Développement et de l’Union Européenne.
                    </p>
                    <div className='grid grid-cols-2 mt-10'>
                        <h1 className='text-3xl font-bold'>Qui peut en bénéficier ?</h1>
                        <div>
                            <ul className='max-w-md space-y-1 text-black list-disc list-inside dark:text-black'>
                                <li>
                                    Vous êtes inscrits au RCCM depuis au moins une année,à la date de clôture des candidatures
                                </li>
                                <li>
                                    Vous disposezd’au moins un état financier
                                </li>
                                <li>
                                    Vous évoluez dans lessecteurssuivants :
                                    <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                                        <li>L’agro-industrie ;</li>
                                        <li>L’industrie légère (BTP, menuiserie, textile, etc.) ;</li>
                                        <li>Les industries créatives et culturelles ;</li>
                                        <li>Les services à haute valeur ajoutée (transport, logistique, tourisme, numérique, etc.) ;</li>
                                        <li>Les services et industries pour une ville durable (économie circulaire, assainissement, gestion des déchets, etc.).</li>
                                    </ol>
                                </li>
                                <li>
                                    Vous avez unchiffre d’affaires compris entre 15 millions et 500 millions FCFA
                                </li>
                                <li>
                                    Vous souhaitez bénéficier d’un appui pour financer des actifs immatériels (certification, labélisation, brevet, etc.) et/ou desprestations de services (études de marchés, plans d’affaires, assistance comptable et juridique, etc.). Le financement d’actifs monnayables (équipements, matériels, etc.) ne fait pas partie des dépenses éligibles ;
                                </li>
                                <li>
                                    Vous êtes en mesure de financer au moins 20% du besoin exprimé par vos propres moyens (fonds propres) ou l’accompagnement d’une institution financière (crédit)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-16'>
                        <h1 className='text-3xl font-bold'>Ce que nous offrons ?</h1>
                        <div>
                            <h1 className='font-bold underline'>Une assistance technique déclinée en 3 étapes pour renforcer les compétences commerciales et faciliter l’accès aux marchés :</h1>
                            <ul className='max-w-md space-y-1 text-black list-disc list-inside dark:text-black'>
                                <li>
                                    Diagnostic personnalisé et définition des axes d’accompagnement en fonction des besoins de la PME
                                </li>
                                <li>
                                    Parcours de formations collectives (gestion financière et administrative de l’entreprise, négociation commerciale, digitalisation, préparation à la levée de fonds, normes et certifications, etc.)
                                </li>
                                <li>
                                    Parcours de coaching sur les axes identifiés avec des coachs et mentors chevronnés dans leur secteur d’activité
                                </li>
                            </ul>
                            <br />
                            <h1 className='font-bold underline'>Une assistance financière :</h1>
                            <ul className='max-w-md space-y-1 text-black list-disc list-inside dark:text-black'>
                                <li>
                                    Un appui financier allant jusqu’à 30 millions de FCFA moyennant une contrepartie à mobiliser en fonds propres ou crédit par la PME
                                </li>
                                <li>
                                    L’appui financier est destiné à financer des actifs immatériels (certification, labélisation, etc.) et certaines prestations de services (études de marché, plans d’affaires, etc.) et n’est pas destiné à financer des actifs monnayables (équipements, matériels, etc.)
                                </li>
                                <li>
                                    Un appui au suivi financier tout au long de l’accompagnement
                                </li>
                            </ul>
                        </div>

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