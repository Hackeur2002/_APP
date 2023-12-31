// src/components/Counter.js
import React, { useState, useEffect, useRef } from 'react';


const Counter = () => {
    // const counterRef = useRef(null);

    // const isElementInViewport = () => {
    //     const rect = counterRef.current.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // };

    // const handleScroll = () => {
    //     if (isElementInViewport() && count < 5) {
    //         setCount((prevCount) => Math.min(prevCount + 1, 5));
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [count]);

    const counterRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let interval;

        if (isInView && count < 10) {
            // Commencez à compter lorsque le composant est en vue et que le compteur est inférieur à 30
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 10); // Incrémentation chaque seconde
        }

        // Nettoyez l'intervalle lorsque le composant n'est plus en vue ou que le compteur atteint 30
        return () => {
            clearInterval(interval);
        };
    }, [isInView, count]);

    return (
        <>
            <div className="bg-gray-100 py-16 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-black">
                            L'ADPME en quelques chiffres
                        </h2>
                    </div>
                </div>
                <div className="mt-10 pb-1" ref={counterRef}>
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Evènements organisés
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">-</dd>
                                    </div>
                                    <div
                                        className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Projets réalisés
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">-</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Formations éffectuées
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">-</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Entreprises accompagnées
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">-</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Counter;
