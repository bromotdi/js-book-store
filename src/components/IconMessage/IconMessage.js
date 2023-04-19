import React from 'react';

export default function IconMessage({ icon, message }) {
  return (
    <div className="col text-center text-muted">
      <img
        src={icon}
        className="w-25 p-5 mt-5"
        alt={message}
        style={{ opacity: 0.2 }}
      />
      <h3>{message}</h3>
    </div>
  );
}
