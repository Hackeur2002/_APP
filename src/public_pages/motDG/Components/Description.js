import React from 'react';
import imgdg from '../Images/dg.jpg';

function Description(props) {
    return (
        <>
            <div className='max-sm:px-1 px-20 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div className="max-xl:flex max-xl:flex-col max-sm:flex max-sm:flex-col grid grid-cols-3 gap-4">
                    <div>
                        <figure className="max-w-lg">
                            <img className="h-auto w-full " src={imgdg} alt="image description" />
                            <figcaption className="mt-2 text-xl text-left text-black dark:text-black font-bold">Edouard SEHLIN</figcaption>
                            <figcaption className="mt-2 text-xl text-left text-amber-500 dark:text-amber-500">Directeur Géneral</figcaption>
                        </figure>
                    </div>
                    <div className="col-span-2 leading-loose">
                        <p className='text-justify text-base pb-5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className='text-justify text-base pb-5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className='text-justify text-base pb-5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;