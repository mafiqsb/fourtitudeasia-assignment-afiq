import React, { useState } from 'react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Button is enabled only if all fields are filled
  const isFormFilled =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.message.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      handleClear();
    }
  };
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  return (
    <section className="connect" id="connect">
      <div className="container">
        <h2>Connect</h2>
        <p>
          Every successful connection starts in conversation. Drop us a line
          today :)
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-horizontal">
            <div className="form-group">
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formData.name ? 'has-value' : ''}
                  required
                />
                <label htmlFor="name" className={formData.name ? 'float' : ''}>
                  Name
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formData.email ? 'has-value' : ''}
                  required
                />
                <label
                  htmlFor="email"
                  className={formData.email ? 'float' : ''}
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formData.phone ? 'has-value' : ''}
                  required
                />
                <label
                  htmlFor="phone"
                  className={formData.phone ? 'float' : ''}
                >
                  Contact no
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container textarea-container">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={formData.message ? 'has-value' : ''}
                required
              ></textarea>
              <label
                htmlFor="message"
                className={formData.message ? 'float' : ''}
              >
                How can we help?
              </label>
            </div>
          </div>
          <div className="form-buttons">
            <button
              type="button"
              className="btn btn-clear"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-submit"
              disabled={!isFormFilled}
            >
              Connect with us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;
             