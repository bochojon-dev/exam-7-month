import React from "react";
import "../contact-page/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_contents">
          <div className="get">
            <div className="get_texts">
              <h3>get in touch</h3>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>
                20 Prince Hakerem Lekki <br />
                Phase 1, Lagos.
              </p>
            </div>
          </div>
          <form>
            <div className="get_form">
              <div className="input">
                <label htmlFor="name">Fullname</label>
                <input type="text" placeholder="James Doe" />
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="jamesdoe@gmail.com" />
              </div>
              <div className="input">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={16}
                  name="message"
                  placeholder="Type your message"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <form className="form">
          <input
            className="search_input"
            type="search"
            required
            placeholder="Search query..."
          />
          <button>Search </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
