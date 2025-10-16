import React from 'react';

const partners = [ 'img/partners/1.png', 'img/partners/2.png', 'img/partners/3.png', 'img/partners/4.png', 'img/partners/5.png', 'img/partners/6.png', 'img/partners/7.png', 'img/partners/8.png', ];

const Partners: React.FC = () => {
  return (
    <section id="features" className="section-with-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2> Our Core Partners </h2>
        </div>

        <div className="row no-gutters features-wrap clearfix">
          {partners.map((src, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-xs-6">
              <div className="features-logo">
                <img src={src} className="img-fluid" alt="AfriGuard's partners logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;