import React from 'react';

const ErrorMessages = ({ errors }) => {
  return <div className="errors">{errors.map(e => e.message).join(', ')}</div>;
};

export default ErrorMessages;
