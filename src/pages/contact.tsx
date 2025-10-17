import React from 'react';

const ContactUs: React.FC = () => {

  return (
    <section id="contact" className="section-bg wow fadeInUp" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <h2> Contact Us </h2>
          <p> Nihil officia ut sint molestiae tenetur. </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3> Address </h3>
              <address> 1600 Amphitheatre Parkway in Mountain View </address>
              <address> Lagos, Nigeria </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3> Phone Number </h3>
              <p> <a href={`tel:+2349094991732`}> +234-909-499-1732 </a> </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3> Email </h3>
              <p> <a href={`mailto:test@gmail.com`}> test@gmail.com </a> </p>
            </div>
          </div>
        </div>

        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>

          <div id="errormessage"></div>

          <form action="" method="post" role="form" className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>

              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validation"></div>
            </div>

            <div className="form-group">
              <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message"> </textarea>
              <div className="validation"></div>
            </div>

            <div className="text-center" style={{ marginTop: '20px' }}>
              <button type="submit"> Send Message </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;