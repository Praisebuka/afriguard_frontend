import React, { useState } from 'react';

interface PriceTag { name: string; photo: { getUrl: () => string } }

interface Schedule { title: string; subtitle: string; price_tag?: PriceTag }

interface Props { pricing_data: Record<number, Schedule[]> }

const PlansPricing: React.FC<Props> = ({ pricing_data }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const planName = (key: number) => {
    if (key === 1) return 'Basic';
    if (key === 2) return 'Premium';
    return 'Pro';
  };

  return (
    <section id="pricing" className="section-with-bg">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h2> Plans & Pricing </h2>
          <p> Here is our Pricing Plans </p>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          {Object.entries(pricing_data).map(([keyStr, day]) => {
            const key = Number(keyStr);
            return (
              <li className="nav-item" key={key}>
                <a className={`nav-link${key === activeTab ? ' active' : ''}`} href={`#day-${key}`} role="tab" data-toggle="tab" onClick={(e) => { e.preventDefault(), setActiveTab(key) }}>
                  {planName(key)} Plan
                </a>
              </li>
            );
          })}
        </ul>

        <h3 className="sub-heading"> Here's what each plan includes: </h3>

        <div className="tab-content row justify-content-center">
          {Object.entries(pricing_data).map(([keyStr, day]) => {
            const key = Number(keyStr);
            return (
              <div role="tabpanel" className={`col-lg-9 tab-pane fade${key === activeTab ? ' show active' : ''}`} id={`day-${key}`} key={key}>
                {day.map((schedule, index) => (
                  <div className="row schedule-item" key={index}>
                    <div className="col-md-2">
                      <time style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                        o
                      </time>
                    </div>
                    <div className="col-md-10">
                      {schedule.price_tag && (
                        <div className="speaker">
                          <img src={schedule.price_tag.photo.getUrl()} alt={schedule.price_tag.name} />
                        </div>
                      )}
                      <h4>
                        {schedule.title}{' '}
                        {schedule.price_tag && <span>{schedule.price_tag.name} </span>}
                      </h4>
                      <p>{schedule.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansPricing;
