import { phases } from "../constants"; // Ensure this path is correct
import styles from "../style"; // Ensure this path is correct
import FeedbackCard from "./FeedbackCard"; // Ensure this path is correct

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-6`} // Add padding-left here
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Phases Of <br className="sm:block hidden" /> Cyber Ambassador <br /> Platform
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Cyber Ambassador Platform had completed 3 phases and aiming for the 4th phase.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {phases.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
