import React, { useState } from "react";

interface Faq { id: number, question: string, answer: string }

interface FaqSectionProps { faqs: Record<number, Faq[]> }

const Faq: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => { setOpenFaq(openFaq === id ? null : id) };

  return (
    <section id="faq" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2> F.A.Q </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <ul id="faq-list">
              {Object.values(faqs).flat().map((faq) => (
                <li key={faq.id}>
                  <a data-toggle="collapse" href={`#faq${faq.id}`} className={openFaq === faq.id ? "" : "collapsed"} onClick={(e) => { e.preventDefault(), toggleFaq(faq.id) }}>
                    {faq.question}{" "}
                    <i className={`fa ${ openFaq === faq.id ? "fa-minus-circle" : "fa-plus-circle" }`}></i>
                  </a>

                  <div id={`faq${faq.id}`} className={`collapse${openFaq === faq.id ? " show" : ""}`} data-parent="#faq-list" >
                    <p> {faq.answer} </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
