import React from 'react';

export default function Wrapp({ children, className }) {
  const classes = className ?? '';

  return (
    <div className="container">
      <div className={`row ${classes}`}>{children}</div>
    </div>
  );
}
