import React from 'react';

interface AboutProps {
  settings: {
    about_description?: string;
    about_where?: string;
    about_when?: string;
  };
}

const AboutUs: React.FC<AboutProps> = ({ settings }) => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2> About AfriGuard </h2>
            <p>{settings.about_description ?? ''}</p>
          </div>
          <div className="col-lg-3">
            <h3> Find Us @ </h3>
            <p>
              <i className="fa fa-map-pin"></i>{' '}
              <span dangerouslySetInnerHTML={{ __html: settings.about_where ?? '' }} />
            </p>
          </div>
          <div className="col-lg-3">
            <h3> MVP Launch </h3>
            <p dangerouslySetInnerHTML={{ __html: settings.about_when ?? '' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;