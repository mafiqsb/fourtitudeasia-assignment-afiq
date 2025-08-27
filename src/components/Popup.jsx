import React, { useEffect, useState } from 'react';

const Popup = ({ show, onClose, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      // Delay hiding for fade out
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
          position: 'fixed',
          inset: 0,
          background: show ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
          transition: 'background 0.3s',
          zIndex: 2000,
          pointerEvents: show ? 'auto' : 'none',
        }}
        onClick={onClose}
      />
      <div
        className="popup-container"
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: show ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
          minWidth: '280px',
          maxWidth: '90vw',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          padding: '24px 24px 16px 24px',
          zIndex: 2100,
          opacity: show ? 1 : 0,
          transition: 'opacity 0.4s, transform 0.4s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            color: '#000000',
            marginBottom: '18px',
            textAlign: 'left',
            flex: 1,
          }}
        >
          This page says
          <br />
          <span style={{ fontSize: '15px'}}>{message}</span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: '#4a6fdc',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 32px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(74,111,220,0.08)',
            marginTop: '8px',
            transition: 'background 0.2s',
            alignSelf: 'flex-end',
          }}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default Popup;
