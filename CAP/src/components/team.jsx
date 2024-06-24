import "../style"; // Importing regular CSS file
import React from "react";
import Shika from "../assets/team/shika.png";
import Raj from "../assets/team/raj.png";
import Ashok from "../assets/team/ashok.png";
import Mallana from "../assets/team/mallana.png";
import Sekhar from "../assets/team/sekhar.png";
import Anuradha from "../assets/team/anuradha.png";
import Mam from "../assets/team/mam.png";
import Lakshmi from "../assets/team/lakshmi.png";

const Team = () => {
    return (
        <>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white">Our Team</p>
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-white">The talented people behind the scenes</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Sekhar} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Sri. Shekar Reddy </p>
                                <p className="text-lg">(DSP), WSW</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Anuradha} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Dr.Anuradha Tatta,</p>
                                <p className="text-lg">WSW (CAP Project Manager)</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Mam} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Smt. Mounika </p>
                                <p className="text-lg"> WSW</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Raj} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Smt. Rema Rajeswari </p>
                                <p className="text-lg">IPS, (DIG), WSW</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Ashok} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Sri.Ashok Kumar</p>
                                <p className="text-lg">(SP), WSW</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Mallana} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Sri. Mallanna </p>
                                <p className="text-lg">(SI),WSW</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="Shika" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Shika} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Smt. Shika Goel</p>
                                <p className="text-lg">IPS, (ADGP), WSW</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
                            <img alt="Shika" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={Lakshmi} />
                            <div className="flex-1 my-4">
                                <p className="text-2xl font-bold leading-snug">Smt. Lakshmi</p>
                                <p className="text-lg">(ASP), WSW</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
