import React, { useEffect } from 'react';
import { Accordeon } from '../../../NoSQL';
import { Accordion } from 'flowbite-react';

function FAQ_home() {
    return (
        <section className="bg-red-500 dark:bg-gray-900 py-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-3xl dark:text-white">Quelques questions fréquemment posées</h1>
                <Accordion collapseAll>
                    {Accordeon.map((donne) => (
                        <Accordion.Panel key={donne.id} className='bg-transparent border-none'>
                            <Accordion.Title className='text-white hover:bg-red-300 focus:bg-red-300 rounded-none'>{donne.title}</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-left text-white dark:text-white bg-transparent">
                                    {donne.description}
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ_home;