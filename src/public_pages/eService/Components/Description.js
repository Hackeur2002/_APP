import React from 'react';
import { EService } from '../../../NoSQL';

function Description() {
    return (
        <>
            <section>
                <div className='px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                    <ol className="space-y-4 text-black list-decimal list-inside dark:text-black ml-5 text-left">
                        {EService.map((donne) => (
                            <li key={donne.id}>
                                <a href='#'><span className='text-amber-700'>{donne.title}</span></a>
                            </li>
                        ))}
                        
                    </ol>
                </div>
            </section>
        </>
    );
}

export default Description;