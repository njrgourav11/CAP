import { objectives } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== objectives.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our <br className="sm:block hidden" /> Objectives.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With the Cyber Ambassador Platform, you can gain the knowledge to stay safe online, increase awareness in your community, and creatively spread cyber safety. Join thousands of students who are making a difference in building a secure and informed digital world.      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {objectives.map((objective, index) => (
        <FeatureCard key={objective.id} {...objective} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
