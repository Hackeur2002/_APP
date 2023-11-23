import React from 'react';
import { FAQLIST } from '../../../NoSQL';
import { Accordion } from 'flowbite-react';

function Description() {
    return (
        <>
            <section>
                
                <div>
                    {FAQLIST.map((donnelist,index) => {
                            const newTab = [...donnelist.questions];
                            return (
                                <div className='px-20 bg-gray-100 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15' key={index}>
                                    {newTab.id == null ? 
                                        (
                                            <>
                                                <h3 className="text-center pb-5">
                                                    <span className="text-2xl font-semibold dark:text-white mr-5">{donnelist.title}</span>
                                                </h3>
                                            </>
                                        ) : ("")
                                    }
                                    {
                                    newTab.map((d,index) => (
                                        <Accordion collapseAll key={index}>
                                            <Accordion.Panel className='bg-transparent border-none'>
                                                <Accordion.Title className='text-black hover:bg-gray-300 focus:bg-gray-300 rounded-none'>{d.question}</Accordion.Title>
                                                <Accordion.Content>
                                                    <p className="mb-2 text-left text-black dark:text-black bg-transparent">
                                                        {d.reponse}
                                                    </p>
                                                </Accordion.Content>
                                            </Accordion.Panel>
                                        </Accordion>
                                    ))}
                                </div>
                            )
                        })}
                    
                </div>
            </section>
        </>
    );
}

export default Description;