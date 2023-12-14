import React from 'react';
import font from '../Images/fond.png'
import { GuidesListe } from '../../../NoSQL';

function guide(props) {
    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className='text-center py-24 lg:py-15 sm:py-15 max-xl:px-14 px-14 mx-auto max-w-screen-xl'>
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5">Guide</span>
                        <a className='hover:underline inline-flex text-amber-700 items-center' href="/guide">
                            <span>voir tout</span>
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </h3>
                    <div className="grid grid-cols-4 gap-4 text-left">
                    {GuidesListe.length <= 0 ? (
                            <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    </div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                    ) : 
                    GuidesListe.map((guide)=>(
                        <div className='p-3 w-auto'>

                            <a target='_blank' href={guide.lien} className="hover:underline inline-flex">
                                <img className="w-5 h-5" src={`/icone_guides/${guide.icone}`} />&nbsp;
                                <span className='text-black-500 dark:text-gray-400'>
                                    {guide.titre}
                                </span>
                            </a>
                        </div>
                    ))
                    }
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default guide;