import React from "react";
import styles from "../style";
import Shika from "../assets/team/shika.png";
import Raj from "../assets/team/raj.png";
import Ashok from "../assets/team/ashok.png";
import Mallana from "../assets/team/mallana.png";
import Sekhar from "../assets/team/sekhar.png";
import Anuradha from "../assets/team/anuradha.png";
import Mam from "../assets/team/mam.png";
import Lakshmi from "../assets/team/lakshmi.png";
import { all, telangana } from "../assets";

const Team = () => {
    return (
        <section id="team" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
                    <img src={telangana} alt="about" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">Our</span> Cyber Ambassador Platform <span className="text-white">Team</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        The <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Team Behind</span>
                    </h1>
                </div>
                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Cyber Ambassador Platform
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    The Cyber Ambassador Program (CAP) is powered by a dedicated and talented team whose expertise spans various fields, including law enforcement, education, and technology. These professionals are united by a common goal: to create a safer and more responsible online environment for students and teachers.                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    The success of the Cyber Ambassador Program (CAP) is driven by a dedicated and talented team of professionals who work tirelessly to make a difference. These individuals bring a wealth of experience, expertise, and passion to the table, ensuring that CAP achieves its mission of empowering students and teachers to navigate the digital world safely and responsibly.                </p>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={all} alt="about" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    
                   
                <ProfileCard
                        name="Sri. Mallanna"
                        role="(SI), WSW"
                        image={Mallana}
                    />
                    
                    <ProfileCard
                        name="Smt. Mounika"
                        role="WSW"
                        image={Mam}
                    />
                   
                    <ProfileCard
                        name="Sri. Shekar Reddy"
                        role="(DSP), WSW"
                        image={Sekhar}
                    />
                     <ProfileCard
                        name="Dr. Anuradha Tatta"
                        role="WSW (CAP Project Manager)"
                        image={Anuradha}
                    />
                    <ProfileCard
                        name="Sri. Ashok Kumar"
                        role="(SP), WSW"
                        image={Ashok}
                    />
                    
                    
                    <ProfileCard
                        name="Smt. Laxmi"
                        role="(ADCP), WSW"
                        image={Lakshmi}
                    />
                    <ProfileCard
                        name="Smt. Shika Goel"
                        role="IPS, (ADGP), WSW"
                        image={Shika}
                    />
                    <ProfileCard
                        name="Smt. Rema Rajeswari"
                        role="IPS, (DIG), WSW"
                        image={Raj}
                    />
                    
                </div>
            </div>
        </section>
    );
};

const ProfileCard = ({ name, role, image }) => {
    return (
        <div className="flex flex-col justify-center w-full mt-10 px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-900 shadow-md">
            <img
                alt={name}
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full"
                src={image}
            />
            <div className="flex-1 my-4">
                <p className="text-2xl font-bold leading-snug">{name}</p>
                <p className="text-lg">{role}</p>
            </div>
        </div>
    );
};

export default Team;
