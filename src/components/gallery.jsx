import React from 'react';
import styles from "../style";
import { telangana } from '../assets';
import Gal from "./gal";

const Gallery = () => {
  return (
    <>
      <section id="gallery" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
            {/* Replace with the CAP video */}
            <img src={telangana} alt="about" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Our</span> Cyber Ambassador Platform <span className="text-white">Gallery</span> 
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Our <br className="sm:block hidden" />{" "}
              <span className="text-gradient">CAP</span> 
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Gallery.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            The Cyber Ambassador Program (CAP) is a training initiative selecting students and teachers from various schools to handle online threats and promote positive use of the internet and mobile devices.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            In a rapidly changing world, there's a need to reorient educational and training systems to inculcate life skills, moral, and ethical values among students, making them tech-savvy instead of tech slaves.
          </p>
        </div>

        <div className="flex mt-10 justify-center">
          <video width="650" height="auto" loop autoPlay muted className="rounded-lg border border-yellow-400 shadow-sm shadow-orange-400 mx-2 my-4 ml-20 mr-20">
            <source src="/cap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <div>
          <Gal />
        </div>
      </section>
    </>
  );
};

export default Gallery;
