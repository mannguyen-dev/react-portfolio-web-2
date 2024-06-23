import React, { useState } from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import { FaT } from "react-icons/fa6";
import userService from "../../services/UserService";
import toast from "react-hot-toast";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [disableBtnSend, setDisableBtnSend] = useState(false);

  const onChangeContactNameHandler = (e) => {
    e.preventDefault();
    setContactName(e.target.value);
  };

  const onChangeContactEmailHandler = (e) => {
    e.preventDefault();
    setContactEmail(e.target.value);
  };

  const onChangeContactSubjectHandler = (e) => {
    e.preventDefault();
    setContactSubject(e.target.value);
  };

  const onChangeContactMessageHandler = (e) => {
    e.preventDefault();
    setContactMessage(e.target.value);
  };

  const sendContactEmailHandler = (e) => {
    e.preventDefault();

    const sendContactEmail = async () => {
      const contactEmailContent = {
        email: contactEmail,
        subject: contactSubject,
        name: contactName,
        message: contactMessage,
        website: "mannguyen.info",
      };

      try {
        console.log("Sending email: ", contactName, contactEmail, contactSubject, contactMessage);

        setDisableBtnSend(true);
        console.log(contactEmailContent);
        await userService.sendContactMail(contactEmailContent);
        setDisableBtnSend(false);
        toast.success("Sent Contact Message!");
      } catch (err) {
        toast.error("An error occurred while sending contact message!");
        console.log(err);
        setDisableBtnSend(false);
      }
    };

    sendContactEmail();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't hesitate!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new project, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">mannguyen.dev@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+84 792 887 666</h4>
              </div>
            </div>
            <div className="contact__socials">
              <a href="https://facebook.com/mannguyenjava" className="contact__social-link">
                <FaFacebookF />
              </a>
              <a href="https://github.com/mannguyen-dev" className="contact__social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mannguyen-dev/" className="contact__social-link">
                <FaLinkedin />
              </a>
              <a href="https://simple-todo-app-5kl0.onrender.com/" className="contact__social-link">
                <FaT />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                onChange={onChangeContactNameHandler}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                onChange={onChangeContactEmailHandler}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                onChange={onChangeContactSubjectHandler}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              className="form__control textarea"
              placeholder="Your Message"
              onChange={onChangeContactMessageHandler}
            ></textarea>
          </div>

          <button
            disabled={disableBtnSend}
            className={`button ${disableBtnSend ? "disable-btn-send" : ""}`}
            onClick={sendContactEmailHandler}
          >
            {disableBtnSend ? "Sending..." : "Send Message"}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
