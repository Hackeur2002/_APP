import React from 'react';
import { CommuniqueListe } from '../../../../NoSQL';
import ReactMarkdown from 'react-markdown';
import 'tailwindcss/tailwind.css';
import remarkGfm from 'remark-gfm'

function Description(props) {
    const communique = CommuniqueListe.filter((communique) => communique.titre === props.name)

    if (communique.length === 0) {
        return <div>Aucun communiqué trouvé avec le titre {props.name}</div>;
    }

    const selectedCom = communique[0];
    return (
        <>
            <div className='max-xl:px-14 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15 w-full'>
                <div className="max-md:flex max-md:flex-col mt-10 ml-10">
                    <img src={selectedCom.image} className='w-full' />
                </div>
                <div className='p-5'>
                    <span className='font-bold text-3sm'>
                        {selectedCom.date} | COMMUNIQUE
                    </span>
                </div>
                <div className='mt-5'>
                    <span className='text-2xl font-bold'>{props.name}</span>
                </div>
                <div className="prose prose-xl text-justify w-full mt-5 max-w-none">
                    <ReactMarkdown className='w-full max-w-none' remarkPlugins={[remarkGfm]}>
                        {selectedCom.description}
                    </ReactMarkdown>
                </div>
                <div className='mt-5'>
                    <a href={selectedCom.lien} target='_blank'>
                        <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                            Consulter le document
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Description;