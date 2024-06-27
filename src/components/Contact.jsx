import React from 'react';
import styles from "../style";
import { facebook, instagram, twitter, telangana } from "../assets";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [showModal, setShowModal] = React.useState(false); // State for modal visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "12028708-2263-4fb8-b199-e8251a1bf306");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setShowModal(true); // Show modal on successful form submission
      } else {
        console.log("Error", data);
        setResult(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult("Failed to submit form");
    }
  };

  const closeModal = () => {
    setShowModal(false); // Function to close the modal
  };

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
            Women Safety Wing, <br />
            Telangana Police, Lakdikapool, <br />
            Hyderabad, 500004, India <br />
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
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full px-6">
        <input type="hidden" name="from_name" value="Cyber Ambassador Platform"/>
          <input type="hidden" name="subject" value="New Contact Enquiry From Cyber Ambassador Platform"/>
          <input type="text" name="name" placeholder="Name" className="p-4 rounded-md bg-white" required />
          <input type="text" name="phone" placeholder="Phone Number" className="p-4 rounded-md bg-white" required />
          <input type="email" name="email" placeholder="Email" className="p-4 rounded-md bg-white" required />
          <input type="text" name="address" placeholder="Address" className="p-4 rounded-md bg-white" required />
          <textarea name="message" placeholder="Message" className="p-4 rounded-md bg-white" rows="4" required></textarea>
          <button type="submit" className="mt-4 p-4 bg-blue-600 text-white rounded-md">Submit</button>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <p className="text-green-600">{result}</p>
              <button onClick={closeModal} className="mt-4 p-2 bg-blue-600 text-white rounded-md">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
