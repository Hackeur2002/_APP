import React from 'react';
import actuimg from '../Images/actuessai.jpg'
import { ActualitesLists } from '../../../NoSQL';
import cal from '../Images/calendrier.png'

function Actualite(props) {
    return (
        <section className="bg-white dark:bg-white">
            <div className='px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <h3 className="text-left pb-5">
                    <span className="text-3xl font-bold dark:text-white mr-5">Actualités</span>
                </h3>
                <div className="grid lg:grid-cols-4 lg:gap-8 text-left grid-cols-2 gap-4">
                    {ActualitesLists.map((al)=>(
                        <div className="max-w-sm bg-white">
                            <a href="#">
                                <img src={actuimg} alt="" />
                            </a>
                            <div className="p-5">
                                <p>
                                    <span className='inline-flex'>
                                        <img className='w-5 h-5' src={cal} />&nbsp;
                                        <span className='text-gray-500 text-sm'><i>{al.date}</i></span>
                                    </span>
                                </p>
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black-900 dark:text-white">{al.titre}</h5>
                                </a>
                                <p className="mb-3 font-normal text-sm dark:text-black-200">{al.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Actualite;