import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Anjali Rao",
    feedback:
      "Absolutely loved the designs and craftsmanship. Shre Mandava Jewellers always brings something fresh and trendy!",
  },
  {
    name: "Ravi Kumar",
    feedback:
      "Top-notch quality and exceptional customer service. My go-to place for every special occasion.",
  },
  {
    name: "Sowmya Reddy",
    feedback:
      "What I love most is the unique blend of tradition and modernity in every piece. Highly recommended!",
  },
  {
    name: "Kiran Mehta",
    feedback:
      "Their pricing is fair and the variety is amazing. I always find something that fits my taste perfectly.",
  },
  {
    name: "Divya Narayan",
    feedback:
      "The intricate designs and the finesse in every product are just unmatched. Proud to own jewelry from here!",
  },
  {
    name: "Mehul Shah",
    feedback:
      "Impressed with the quality and the quick delivery. The experience was smooth and satisfying.",
  },
  {
    name: "Pooja Bansal",
    feedback:
      "If you're looking for something elegant and affordable, this is the right place. I keep coming back!",
  },
  {
    name: "Ajay Verma",
    feedback:
      "Their custom design service is fantastic. They brought my vision to life beautifully!",
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "Excellent customer service and stunning collections. I always feel valued and welcomed.",
  },
  {
    name: "Nikhil Desai",
    feedback:
      "Bought an anniversary gift and it turned out perfect! Exceptional quality and presentation.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <p className="testimonial-name">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
