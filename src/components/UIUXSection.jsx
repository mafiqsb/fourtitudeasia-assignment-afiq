import React from 'react';
const UIUXSection = () => {
  const uiuxServices = [
    {
      category: "User Experience",
      title: "Intuitive digital experiences to elevate your business",
      description: "Through our UX design services we help you capture and retain the trust, business and loyalty of key customer groups.",
      image: "https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png"
    },
    {
      category: "User Interface",
      title: "Deliver memorable brand experiences using human-centred design",
      description: "We make innovation user-friendly with content and design best practices to translate your business goals into experiences that are meaningful to customers.",
      image: "https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png"
    },
    {
      category: "Cloud Marketing",
      title: "Leverage cloud applications for digital marketing efficacy",
      description: "Through our digital marketing solutions, we help create impactful digital campaigns, and experiences that are bound to captivate audiences.",
      image: "https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png"
    }
  ];
  return (
    <section className="ui-ux" id="ui-ux">
      <div className="container">
        <h2>UI & UX Design</h2>
        <p className="section-description">We bring value to your business by producing seamless, multi-platform digital experiences that result in strong, meaningful user engagements. Read more about our services below.</p>
        <div className="uiux-cards">
          {uiuxServices.map((service, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-category">{service.category}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UIUXSection;