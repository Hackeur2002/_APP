import React from 'react';
import { RecrutementsListe } from '../../../../NoSQL';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Description(props) {
    const event = RecrutementsListe.filter((event) => event.titre === props.name)

    if (event.length === 0) {
        return <div>Aucun recrutement trouvé avec le titre {props.name}</div>;
    }

    const selectedEvent = event[0];
    return (
        <>
            <div className='max-xl:px-14 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div className="max-xl:flex max-xl:flex-col grid grid-cols-2 gap-4">
                    <div>
                        <div className='mb-10'>
                            <span className='text-xl font-bold'>   DESCRIPTION DU POSTE</span>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full text-left text-sm font-light">
                                                <tbody>
                                                    <tr
                                                        className="border-b bg-amber-100 dark:border-amber-500 dark:bg-amber-700">
                                                        
                                                        <td className="whitespace-nowrap px-6 py-4">POSTE</td>
                                                        <td className="whitespace-nowrap py-4"><span className='text-bold'>{selectedEvent.titre}</span></td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-white dark:border-amber-500 dark:bg-amber-600">
                                                        
                                                        <td className="whitespace-nowrap px-6 py-4">TYPE D'EMPLOI</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.typeemploi}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-amber-100 dark:border-amber-500 dark:bg-amber-600">

                                                        <td className="whitespace-nowrap px-6 py-4">SPECIALITE</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.specialite ? selectedEvent.specialite : "-"}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-white dark:border-amber-500 dark:bg-amber-600">
                                                        
                                                        <td className="whitespace-nowrap px-6 py-4">LIEU</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.lieu}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-amber-100 dark:border-amber-500 dark:bg-amber-600">

                                                        <td className="whitespace-nowrap px-6 py-4">REGION</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.region}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-white dark:border-amber-500 dark:bg-amber-600">

                                                        <td className="whitespace-nowrap px-6 py-4">DESCRIPTION DU SALAIRE</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.descsal}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-amber-100 dark:border-amber-500 dark:bg-amber-600">

                                                        <td className="whitespace-nowrap px-6 py-4">PUBLIE LE</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.datedeb}</td>
                                                    </tr>
                                                    <tr
                                                        className="border-b bg-white dark:border-amber-500 dark:bg-amber-600">

                                                        <td className="whitespace-nowrap px-6 py-4">DATE FIN</td>
                                                        <td className="whitespace-nowrap py-4">{selectedEvent.datefin}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='mt-5'>
                                                <a href={selectedEvent.lien} target='_blank'>
                                                    <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded-l-lg rounded-tr-lg">
                                                        Consulter le document
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mb-10'>
                            <span className='text-xl font-bold'>   INFORMATIONS  COMPLÉMENTAIRES</span>
                        </div>
                        <div>
                            <div className="prose prose-xl text-justify w-full mt-5 max-w-none text-black">
                                {selectedEvent.subTitle}
                                <ReactMarkdown className='w-full max-w-none' remarkPlugins={[remarkGfm]}>
                                    {selectedEvent.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Description;