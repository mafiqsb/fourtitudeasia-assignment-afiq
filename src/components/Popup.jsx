import React, { useEffect, useState } from 'react';

const Popup = ({ show, onClose, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!visible && !show) return null;

  return (
    <>
      <div
        className="popup-overlay"
        style={{
          background: show ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
          pointerEvents: show ? 'auto' : 'none',
        }}
        onClick={onClose}
      />
      <div
        className="popup-container"
        style={{
          transform: show ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
          opacity: show ? 1 : 0,
        }}
      >
        <div className="popup-content">
          This page says
          <br />
          <span className="popup-message">{message}</span>
        </div>
        <button onClick={onClose} className="popup-button">
          OK
        </button>
      </div>
    </>
  );
};

export default Popup;