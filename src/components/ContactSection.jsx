import React, { useState, useEffect } from 'react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = React.useCallback(() => {
    const errors = {};
    let valid = true;
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }
    setFormErrors(errors);
    setIsFormValid(valid);
  }, [formData]);
  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
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
      message: ''
    });
  };
  return (
    <section className="connect" id="connect">
      <div className="container">
        <h2>Connect</h2>
        <p>Every successful connection starts in conversation. Drop us a line today :)</p>
        <form className="contact-form" onSubmit={handleSubmit}>
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
              <label htmlFor="name" className={formData.name ? 'float' : ''}>Name</label>
              {formErrors.name && <span className="error">{formErrors.name}</span>}
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
              <label htmlFor="email" className={formData.email ? 'float' : ''}>Email address</label>
              {formErrors.email && <span className="error">{formErrors.email}</span>}
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
              <label htmlFor="phone" className={formData.phone ? 'float' : ''}>Contact no</label>
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
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
              <label htmlFor="message" className={formData.message ? 'float' : ''}>How can we help?</label>
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
          </div>
          <div className="form-buttons">
            <button type="button" className="btn btn-clear" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="btn btn-submit" disabled={!isFormValid}>
              Connect with us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;