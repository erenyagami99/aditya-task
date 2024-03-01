import React, { useState } from "react";
import { FaqQuestions } from "../Data";

const FaqSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const handleItemClick = (index) => {
    if (index === openItem) {
      setOpenItem();
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="width-full faq-div">
      <div className="person-div width-70 center-div flex gap-25">
        <div className="faq-form white">
          <div className="form-data">
            <h1 className="font-40">Request a Quote</h1>
            <p style={{ padding: "15px 0" }}>Ready to Work Together?</p>
            <div className="flex column" style={{ gap: "30px" }}>
              <input className="input" type="text" placeholder="Answer Here" />
              <input className="input" type="text" placeholder="Answer Here" />
              <input className="input" type="text" placeholder="Answer Here" />
              <textarea
                type="text"
                placeholder="Answer Here"
                rows={10}
              ></textarea>
            </div>
            <button className="button" style={{ marginTop: "20px" }}>
              Submit
            </button>
          </div>
        </div>
        <div className="questions center-div">
          <h1 className="orange-text font-24">Learn More From</h1>
          <h1 className="blue-heading font-40">Frequently Asked Questions</h1>
          <div className="questions-div blue-heading">
            {FaqQuestions.map((faq, index) => (
              <div key={index}>
                <div className="flex space-between items-center">
                  <p>{faq.question}</p>
                  {index === openItem ? (
                    <img
                      className="icon-image"
                      src="/images/plus-icon.png"
                      onClick={() => handleItemClick(index)}
                    />
                  ) : (
                    <img
                      className="icon-image"
                      src="/images/minus-icon.png"
                      onClick={() => handleItemClick(index)}
                    />
                  )}
                </div>
                <div style={{ display: index === openItem ? "block" : "none" }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
