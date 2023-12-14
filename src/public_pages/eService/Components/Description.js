import React from 'react';

function Description() {
    return (
        <>
            <section>
                <div className='px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                    <ol className="space-y-4 text-black list-decimal list-inside dark:text-black ml-5 text-left">
                        <li>
                            <a target='_blank' className='inline-flex text-amber-700 items-center'>
                                <span>Attestation d'identification du statut de la MPME (Bientôt disponible)</span>
                                {/* <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg> */}
                            </a>
                            
                        </li>
                    </ol>
                </div>
            </section>
        </>
    );
}

export default Description;