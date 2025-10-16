import React from 'react';

interface Speaker { name: string, photo: { getUrl: () => string } }

interface Schedule { title: string, subtitle: string, speaker?: Speaker }

interface Props { schedules: Record<number, Schedule[]> }


const PlansPricing: React.FC<Props> = ({ schedules }) => {
  const planName = (key: number) => {
    if (key === 1) return 'Basic';
    if (key === 2) return 'Premium';
    return 'Pro';
  };

  return (
    <section id="schedule" className="section-with-bg">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h2> Plans & Pricing </h2>
          <p> Here is our Pricing Plans </p>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          {Object.entries(schedules).map(([keyStr, day]) => {
            const key = Number(keyStr);
            return (
              <li className="nav-item" key={key}>
                <a className={`nav-link${key === 1 ? ' active' : ''}`} href={`#day-${key}`} role="tab" data-toggle="tab">
                  {planName(key)} Plan
                </a>
              </li>
            );
          })}
        </ul>

        <h3 className="sub-heading"> Here's what each plan includes: </h3>

        <div className="tab-content row justify-content-center">
          {Object.entries(schedules).map(([keyStr, day]) => {
            const key = Number(keyStr);
            return (
              <div
                role="tabpanel"
                className={`col-lg-9 tab-pane fade${key === 1 ? ' show active' : ''}`}
                id={`day-${key}`}
                key={key}
              >
                {day.map((schedule, index) => (
                  <div className="row schedule-item" key={index}>
                    <div className="col-md-2">
                      <time style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, }}> o </time>
                    </div>
                    <div className="col-md-10">
                      {schedule.speaker && (
                        <div className="speaker">
                          <img src={schedule.speaker.photo.getUrl()} alt={schedule.speaker.name} />
                        </div>
                      )}
                      <h4>
                        {schedule.title}{' '}
                        {schedule.speaker && <span>{schedule.speaker.name} </span>}
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