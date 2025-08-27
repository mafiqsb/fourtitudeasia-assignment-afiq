import React from 'react';
const ServiceCard = () => {
  const services = [
    {
      category: 'Customized Development',
      title: 'Tailor-made solutions for your business',
      description:
        "Can't find a ready-made solution that fits? We can custom build mobile & web applications to suit your business needs.",
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png',
    },
    {
      category: 'Integration & API Management',
      title: 'Achieve digital transformation via an API management ecosystem',
      description:
        "Venture into the mobile space with our mobility services. From mobile-first websites to mobile apps, we're ready to help you develop a mobile solution that works.",
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png',
    },
    {
      category: 'Cloud-native Development',
      title: 'Enhance your business in a cloud-native environment',
      description:
        'Improve business agility, velocity and flexibility through the cloud – we are here to guide you through the entire process.',
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png',
    },
    {
      category: 'Mobile Development',
      title: 'Become an anywhere business',
      description:
        "From mobile-first websites to mobile apps, we're ready to help you develop a mobile solution that works.",
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png',
    },
    {
      category: 'Application Modernization',
      title: 'Breathing new life into old technology',
      description:
        'Give legacy or aging systems a new lease on life. We can help you modernize them to better serve your business needs.',
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/8SVYvV3XoAXWobivpnnWBA/image.png',
    },
  ];
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="service-cards">
          {services.map((service, index) => (
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
export default ServiceCard;
