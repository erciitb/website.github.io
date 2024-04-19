function ContactUs() {
  return (
    <>
    <div className="contact-section" id="contact">
        <div className="contact-details">
          <p id="contact-text" className="hover-difference">
            Get directly in touch with us:
          </p>
          <div className="contact-icons hover-difference">
            <a href="https://www.facebook.com/erciitb">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/erc.iitb/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:erciitbombay@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </div>
          <a
            href="mailto:elecrobo.club@iitb.ac.in"
            id="contact-mail"
            className="hover-difference"
          >
            elecrobo.club@iitb.ac.in
          </a>
          <button className="contact-form-button">Message us</button>
        </div>
        <div className="contact-form-map-mix-outer">
          <div className="contact-form-map-mix-inner">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6786880670256!2d72.9138437580561!3d19.13376545835707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f5e4ac7efd%3A0xd9d02f29b4617fb4!2sTinkerers&#39;%20Laboratory!5e0!3m2!1sen!2sin!4v1597995010048!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="contact-form">
              <form
                action="./form-submit.php"
                method="POST"
                id="validated-form"
              >
                <div className="contact-form-element">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="contact-user-name"
                    required
                  ></input>
                </div>
                <div className="contact-form-element">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="contact-user-email"
                    required
                  ></input>
                </div>
                <div className="contact-form-element">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    maxlength="10000"
                    cols="30"
                    rows="4"
                    id="contact-user-message"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;
