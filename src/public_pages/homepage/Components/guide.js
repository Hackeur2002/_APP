import React from 'react';

function guide(props) {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className='px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5">Guide</span>
                        <a href="/guide" className="hover:underline">
                            <span className='text-black-500 dark:text-gray-400'>voir tout</span>
                        </a>
                    </h3>
                    <div className="grid grid-cols-4 gap-4 text-left">
                        <div className='p-3 w-auto'>
                            <a href="/pdf" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Guide des
                                    fondateurs pour
                                    la levée de fonds
                                    au Bénin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default guide;