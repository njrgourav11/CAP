import styles from "../style";
import {facebook, instagram,twitter,telangana} from "../assets";
const Contact = () => {
  return (
    <section id="contact" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-contact-gradient rounded-[10px] mb-2">
        <img src={telangana} alt="about" className="w-[32px] h-[32px]" />

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Contact</span> Cyber Ambassador Platform
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Get in <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Touch</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          With Us.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          If you have any questions, feel free to reach out to us. We are here to help and answer any inquiries you may have about the Cyber Ambassador Program.
        </p>

        <div className="mt-8">
          <h2 className="text-white text-2xl font-semibold mb-4">Our Location</h2>
          <p className={`${styles.paragraph} max-w-[470px]`}>
          Women Safety Wing

,<br />
Telangana Police, Lakdikapool,<br />
Hyderabad, 500004, India<br />
            Phone: +91 40 27852246
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-white text-2xl font-semibold mb-4">Follow Us On</h2>
          <div className="flex flex-row space-x-4">
            <a href="https://www.facebook.com/tgwomensafety" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://x.com/tg_womensafety" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/womensafetywing_tg/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <form className="flex flex-col gap-4 w-full px-6">
          <input type="text" placeholder="Name" className="p-4 rounded-md bg-white" />
          <input type="text" placeholder="Phone Number" className="p-4 rounded-md bg-white" />
          <input type="email" placeholder="Email" className="p-4 rounded-md bg-white" />
          <input type="text" placeholder="Address" className="p-4 rounded-md bg-white" />
          <textarea placeholder="Message" className="p-4 rounded-md bg-white" rows="4"></textarea>
          <button type="submit" className="mt-4 p-4 bg-blue-600 text-white rounded-md">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
