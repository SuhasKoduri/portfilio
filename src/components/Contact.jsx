import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTelegramPlane,FaSms,FaFacebookF, FaInstagram, FaTwitter  } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SID, // Replace with your EmailJS service ID
      import.meta.env.VITE_EMAILJS_TID, // Replace with your EmailJS template ID
      form.current,
      import.meta.env.VITE_EMAILJS_PK // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, try again.");
      }
    );
  };









  return (
    <section id="contact">
    <h1 className="heading">Contact Me</h1>
    <div className="contact" >
        <div className="right">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Mail ID" required/>
            <textarea name="message" placeholder="Type Your Message Here" required>

            </textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        
    <div className="contact-info">

      <div className="info-item">
        <FaEnvelope />
        <span>suhaskoduri26@gmail.com</span>
      </div>

      <div className="info-item">
        <FaPhoneAlt />
        <span>+91-8310646411</span>
      </div>

      <div className="info-item">
        <FaMapMarkerAlt />
        <span>Hyderabad</span>
      </div>

      <div className="contact-icon">
        <a
          href="https://wa.me/918310646411"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://t.me/Suhas_koduri"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaTelegramPlane />
        </a>
        <a href="sms:+918310646411"> <FaSms /> </a>
        </div>
        </div>
    </div>
    <div className="extra">
    <div className="contact-icon">
  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://instagram.com/suhas_koduri_26" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://x.com/suhaskoduri" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
    </div>
    </div>
</section>
  )
}

export default Contact
