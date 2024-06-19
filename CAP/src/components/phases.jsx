import React from 'react';
import { phases } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Phases = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to stay safe online and empower your community with digital literacy. Join us in creating a secure and informed digital environment for everyone.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {phases.map((phase) => (
        <FeedbackCard
          key={phase.id}
          content={phase.description}
          name={phase.title}
          title=""
          img={phase.img} 
        />
      ))}
    </div>
  </section>
);

export default Phases;
