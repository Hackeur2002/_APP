import React, { useEffect } from 'react';
import { FAQLIST } from '../../../NoSQL';
import { Accordion } from 'flowbite-react';

function FAQ_home() {
    return (
        <section className="bg-white dark:bg-gray-900 py-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
                <h1 className="text-center pb-5">
                    <span className="text-3xl font-bold dark:text-white mr-5">Quelques questions fréquemment posées</span>
                    <a className='hover:underline inline-flex text-amber-700 items-center' href="/FAQ">
                        <span>voir tout</span>
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </h1>
                <Accordion collapseAll>
                    {FAQLIST.map((donne) => {
                        return donne.questions.map((faq)=>(
                            <div key={donne.id}>
                                <Accordion.Panel className='bg-transparent border-none'>
                                    <Accordion.Title className='text-black hover:bg-gray-200 focus:bg-gray-200 rounded-none'>{faq.question}</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-left text-black dark:text-black bg-transparent">
                                            {faq.reponse}
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </div>
                        ))
                    })}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ_home;