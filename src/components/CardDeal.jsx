import { she } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} ${styles.flexCenter} ml-10`}>
    <div className={`${layout.sectionInfo} ${styles.textLeft}`}>
      <h2 className={styles.heading2}>
      Discover a safer digital future through <br className="sm:block hidden" /> CAP in Telangana.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      CAP, or the Cyber Ambassador Platform, is a pioneering initiative aimed at empowering children across government and welfare schools in Telangana with crucial online safety skills. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={she} alt="billing" className="w-[50%] h-[50%]" />
    </div>
  </section>
);

export default CardDeal;
