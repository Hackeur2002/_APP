import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TypeEvent } from '../../../NoSQL';
import { EvenemntsLists } from '../../../NoSQL';
import EventImg from '../Images/actuessai.jpg'

function LesEvenements() {
    const [tabEvent, setTabEvent] = React.useState([]);
    const [value, setValue] = useState('tous');

    const handleChange = async (event) => {
        setValue(event.target.value);

        const filteredEvents = EvenemntsLists.map((el) =>
            el.type.map((ty) =>
                ty.contenu.filter((ctu) => ctu.idtype === event.target.value)
            )
        );

        setTabEvent(filteredEvents);
        console.log(tabEvent)
    };
    return (
        <>
            <div className='mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:flex sm:flex-col">
                <div className="text-left">
                        {EvenemntsLists.map((evl) => {
                            return (
                                <div className='pb-4'>
                                    <h3 className='font-bold'>{evl.libelle}</h3>
                                    <FormGroup
                                        onChange={handleChange}
                                        value={value}
                                    >
                                        {
                                            evl.type.map((te) => (
                                                <FormControlLabel value={te.id.toString()} key={te.id} control={<Checkbox />} label={<span className='text-sm'>{te.typeE}</span>} />
                                            ))
                                        }
                                    </FormGroup>
                                </div>
                            )
                        })}
                </div>
                
                    
                    <div className="col-span-3">
                        <div className="grid lg:grid-cols-3 lg:gap-8 text-left grid-cols-2 gap-4">
                            {value == 'tous' ? 
                            EvenemntsLists.map((el) => {
                                return el.type.map((et)=>{
                                    return et.contenu.map((ec)=>(
                                        <div key={ec.id} className="max-w-sm bg-white">
                                            <a href="#">
                                                <img src={EventImg} elt="" />
                                            </a>
                                            <div className="p-5">
                                                <p><span className='text-gray-300'><i>{ec.date}</i></span></p>
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black-900 dark:text-white">{ec.titre}</h5>
                                                </a>
                                                <p className="mb-3 font-normal text-sm dark:text-black-200">{ec.description}</p>

                                            </div>
                                        </div>
                                    ))
                                })
                            }) : 
                            tabEvent.map((ev)=>(
                                
                                <div className="max-w-sm bg-white">
                                    <a href="#">
                                        <img src={EventImg} elt="" />
                                    </a>
                                    <div className="p-5">
                                        <p><span className='text-gray-300'><i>{ev.date}</i></span></p>
                                        <a href="#">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black-900 dark:text-white">{ev.titre}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-sm dark:text-black-200">{ev.description}</p>

                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default LesEvenements;