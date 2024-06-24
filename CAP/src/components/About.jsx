import styles from "../style";
import { all, telangana } from "../assets";
import GetStarted from "./GetStarted";
import Phases from "./phases";
import Objectives from "./objective"; // Make sure the import path is correct

const About = () => {
  return (
    <>
      <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
            <img src={telangana} alt="about" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">About</span> the <span className="text-white">Cyber Ambassador</span> Program
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              About <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Cyber Ambassador</span> 
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Program.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            The Cyber Ambassador Program (CAP) is a training initiative selecting students and teachers from various schools to handle online threats and promote positive use of the internet and mobile devices.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            In a rapidly changing world, there's a need to reorient educational and training systems to inculcate life skills, moral, and ethical values among students, making them tech-savvy instead of tech slaves.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={all} alt="about" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>
      
      <section className="mt-10 md:mt-20 px-6 md:px-16">
        <Objectives />
        <Phases />
      </section>
    </>
  );
};

export default About;
