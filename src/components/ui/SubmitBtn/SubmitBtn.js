import React from 'react';
import './SubmitBtn.css';

function SubmitBtn({ label }) {
  return (
    <button type="submit" className="submit-btn">{label}</button>
  );
}

export default SubmitBtn;
