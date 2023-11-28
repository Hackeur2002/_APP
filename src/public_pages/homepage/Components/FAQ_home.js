import React, { useEffect } from 'react';
import { FAQLIST } from '../../../NoSQL';
import { Accordion } from 'flowbite-react';

function FAQ_home() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-black md:text-3xl lg:text-3xl dark:text-black">Quelques questions fréquemment posées</h1>
                <Accordion collapseAll>
                    {FAQLIST.map((donne) => {
                        return donne.questions.map((faq)=>(
                            <Accordion.Panel key={donne.id} className='bg-transparent border-none'>
                                <Accordion.Title className='text-black hover:bg-gray-200 focus:bg-gray-200 rounded-none'>{faq.question}</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-left text-black dark:text-black bg-transparent">
                                        {faq.reponse}
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))
                    })}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ_home;