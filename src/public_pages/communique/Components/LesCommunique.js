import React from 'react';
import { Card } from 'flowbite-react';
import ComImg from '../Images/communique.jpg';
import { CommuniqueListe } from '../../../NoSQL';
import cal from '../Images/calendrier.png'

function LesCommunique() {
    return (
        <>
            <div className='max-xl:flex max-xl:items-center max-xl:justify-center max-xl:h-screen max-xl:px-4 px-20 mx-auto max-w-screen-xl py-24 lg:py-15 sm:py-15 max-xl:text-left text-left'>
                {CommuniqueListe.length <= 0 ? (<span>Aucun Communiqué pour le moment</span>) : 
                    <div className='lg:grid lg:grid-cols-4 lg:gap-4 max-xl:space-y-2'>
                        {CommuniqueListe.map((el) => (
                            <div key={el.id} className="max-w-sm max-xl:bg-gray-50 bg-white max-xl:border max-xl:rounded">
                                <a href={`/details-evenement/${el.titre}`}>
                                    {el.image ? (<img className='w-full h-20' src={el.image} elt="" />) : ("")}
                                </a>
                                <div className="p-5">
                                    <p>
                                        <span className='inline-flex'>
                                            <img className='w-5 h-5' src={cal} />&nbsp;
                                            <span className='text-gray-500 text-sm'><i>{el.date}</i></span>
                                        </span>
                                    </p>
                                    <a href={`/details-communiques/${el.titre}`}>
                                        <h5 className="truncate overflow-ellipsis mb-2 text-2sm font-bold tracking-tight text-black-900 dark:text-white">{el.titre}</h5>
                                    </a>
                                    <a className='hover:underline inline-flex text-amber-700 items-center' href={`/details-communiques/${el.titre}`}>
                                        <span>Lire l'article</span>
                                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                        </svg>
                                    </a>

                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
}
// Ancienne version
// {/* <div className='text-left'>
//                                     <Card
//                                         className="max-w-sm animate-once animate-duration-1000 animate-delay-300"
//                                         key={el.id}
//                                     >
//                                         <img src={el.image} />
//                                         <h5 className="text-sm font-bold tracking-tight text-black dark:text-white">
//                                             <span className='inline-flex'>
//                                                 <img className='w-5 h-5' src={cal} />&nbsp;
//                                                 <span className='text-gray-500 text-sm'><i>{el.date}</i></span>
//                                             </span>
//                                         </h5>
//                                         <p className="truncate overflow-ellipsis text-2sm text-black dark:text-black font-bold">
//                                             {el.titre}
//                                         </p>
//                                         <a className='hover:underline inline-flex text-amber-700 items-center' href={`/details-communiques/${el.titre}`}>
//                                             <span>Lire l'article</span>
//                                             <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                                             </svg>
//                                         </a>
//                                     </Card>
//                                 </div> */}
export default LesCommunique;