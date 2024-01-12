import React, { useState } from 'react';
import fond from '../Images/fond.png'
import { GuidesListe } from '../../../NoSQL';

function LesGuides(props) {
    return (
        <div className='max-xl:px-4 px-14 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
            <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:flex sm:flex-col max-xl:space-y-2">
                {GuidesListe.length <= 0 ? (<span>Aucun projet pour le moment</span>) :
                    GuidesListe.map((guide) => (
                        <div key={guide.id} className="text-left max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <img className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" src={`/icone_guides/${guide.icone}`} />
                                <a target='_blank' href={guide.lien}>
                                    <h5 className="mb-2 text-2sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {guide.titre}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    Accédez à ce guide pour en savoir plus...
                                </p>
                                <a target='_blank' href={guide.lien} className="inline-flex items-center text-amber-700 hover:underline">
                                    Voir notre guides
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LesGuides;