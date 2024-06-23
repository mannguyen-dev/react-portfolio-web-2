import React from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import { FaT } from "react-icons/fa6";

const Contact = () => {
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
              <input type="text" placeholder="Your Name" className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder="Your Email" className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder="Your Subject" className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
            <textarea className="form__control textarea" placeholder="Your Message"></textarea>
          </div>

          <button className="button">
            Send Message
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
