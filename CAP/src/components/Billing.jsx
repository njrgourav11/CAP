import { she, st, telangana } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} ml-10`}>
    <div className={layout.sectionImgReverse}>
      <img src={telangana} alt="billing" className="w-[60%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> online safety & digital learning
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Stay informed and protected in the digital world. With the Cyber Ambassador Platform, you can enhance your digital literacy, safeguard your personal information, and contribute to a secure online community. Empower yourself and others with the knowledge to navigate the internet safely.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={st} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={she} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
