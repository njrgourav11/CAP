import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { cap } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col items-center md:items-start mr-10">
        <img
          src={cap}
          alt="cap"
          className="mt-0 w-[95%] h-[100%] object-contain"
        />
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.link.startsWith('http') ? (
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.link}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[15px] leading-[20px] text-white">
        Copyright Ⓒ 2024 Campus Ambassador Platform. All Rights Reserved. <br />
        <a href="https://www.linkedin.com/in/bgourav2287/" target="_blank" rel="noopener noreferrer">
          Designed and maintained by <u>Gourav</u>.
        </a>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
