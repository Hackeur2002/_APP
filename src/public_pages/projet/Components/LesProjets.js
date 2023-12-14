import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ProjetsListe } from '../../../NoSQL';
import EventImg from '../Images/actuessai.jpg'
import { Radio, RadioGroup } from '@mui/material';
import cal from '../Images/calendrier.png'

function LesProjets() {
    const [value, setValue] = useState('tous');
    const [tabEvent, setTab] = useState(ProjetsListe);
    const handleChange = async (event) => {
        setValue(event.target.value);

        const filteredEvents = ProjetsListe.filter((e) => e.statut == event.target.value);

        setTab(filteredEvents);
    };
    return (
        <>
            <div className='max-xl:px-14 px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                {ProjetsListe.length <= 0 ? (<span>Aucun projet pour le moment</span>) : 
                    <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:flex sm:flex-col">
                        <div className="text-left sm:pb-4">
                            <h3 className='font-bold'>ETAT DES PROJETS</h3>
                            <RadioGroup
                                onChange={handleChange}
                                value={value}
                            >
                                <FormControlLabel value="bt" control={<Radio />} label={<span className='text-sm'>Bientôt terminé</span>} />
                                <FormControlLabel value="o" control={<Radio />} label={<span className='text-sm'>Ouvert</span>} />
                                <FormControlLabel value="t" control={<Radio />} label={<span className='text-sm'>Terminée</span>} />
                            </RadioGroup>
                        </div>
                        <div className="col-span-3">
                            <div className="grid lg:grid-cols-3 lg:gap-8 text-left grid-cols-2 gap-4">
                                {value == "tous" ?
                                    ProjetsListe.map((el) => (
                                        <div className="max-w-sm bg-white" key={el.id}>
                                            <a href={`/details-projets/${el.title}`}>
                                                {el.image ? (<img src={el.image} elt="" />) : ("")}
                                            </a>
                                            <div className="p-5">
                                                <p><span className='text-gray-300'><i>{el.date}</i></span></p>
                                                <a href={`/details-projets/${el.title}`}>
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-black-900 dark:text-white">{el.title}</h5>
                                                </a>
                                                <p className="mb-3 font-normal text-sm dark:text-black-200">{el.description}</p>
                                                {el.statut == "bt" ? (<span className='bg-amber-500 rounded p-1 text-white'>Bientôt terminée</span>)
                                                    : el.statut == "o" ? (<span className='bg-green-500 rounded p-1 text-white'>Ouvert</span>)
                                                        : (<span className='bg-red-500 rounded p-1 text-white'>Terminée</span>)}

                                            </div>
                                        </div>
                                    )) :
                                    tabEvent.map((el) => (
                                        <div className="max-w-sm bg-white" key={el.id}>
                                            <a href={`/details-projets/${el.title}`}>
                                                <img src={EventImg} elt="" />
                                            </a>
                                            <div className="p-5">
                                                <p>
                                                    <span className='inline-flex'>
                                                        <img className='w-5 h-5' src={cal} />&nbsp;
                                                        <span className='text-gray-500 text-sm'><i>{el.datedeb}</i></span>
                                                    </span>
                                                </p>
                                                <a href={`/details-projets/${el.title}`}>
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-black-900 dark:text-white">{el.title}</h5>
                                                </a>
                                                <p className="mb-3 font-normal text-sm dark:text-black-200">{el.description}</p>
                                                {el.statut == "bt" ? (<span className='bg-amber-500 rounded p-1 text-white'>Bientôt terminée</span>)
                                                    : el.statut == "o" ? (<span className='bg-green-500 rounded p-1 text-white'>Ouvert</span>)
                                                        : (<span className='bg-red-500 rounded p-1 text-white'>Terminée</span>)}

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            
        </>
    );
}

export default LesProjets;