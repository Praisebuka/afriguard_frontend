import React from 'react';

interface Hotel { imgSrc: string; imgAlt: string; title: string; stars: number; description: string; }

const hotels: Hotel[] = [
  {
    imgSrc: 'img/whoarewe/protection.jpg',
    imgAlt: 'Affordable Protection',
    title: 'Affordable Protection',
    stars: 3,
    description: "You'd be getting a comprehensive enterprise-grade security",
  },
  {
    imgSrc: 'img/whoarewe/automated.png',
    imgAlt: 'Automated Operations',
    title: 'Automated Operations',
    stars: 5,
    description: "An automated process that won't take chunk of your time or eat up your calender before you fix",
  },
  {
    imgSrc: 'img/whoarewe/offline.png',
    imgAlt: 'Offline Capability',
    title: 'Offline Capability',
    stars: 1,
    description: "This system works offline on your behalf & also keeps you informed about the whole process and the mitigations you need work on",
  },
  {
    imgSrc: 'img/whoarewe/local_compliance.jpg',
    imgAlt: 'Offline Capability',
    title: 'Local Compliance',
    stars: 5,
    description: "We Abide by the rules & regulations of CSEAN, NITDA, CISA etc",
  },
  {
    imgSrc: 'img/whoarewe/easy_to_setup.jpg',
    imgAlt: 'Offline Capability',
    title: 'Easy to Set Up',
    stars: 3,
    description: "Our system is one of the most simple to set up. And you also get to see this for yourself",
  },
];

const WhatWeOfferSection: React.FC = () => (
  <section id="hotels" className="section-with-bg wow fadeInUp">
    <div className="container">
      <div className="section-header">
        <h2>What We Offer</h2>
        <p>Affordable SME services for Africans no matter where you are on the path to wealth</p>
      </div>

      <div className="row">
        {hotels.map((hotel, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel.imgSrc} alt={hotel.imgAlt} className="img-fluid" />
              </div>
              <h3><a href="#">{hotel.title}</a></h3>
              <div className="stars">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <i key={i} className="fa fa-star"></i>
                ))}
              </div>
              <p>{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferSection;