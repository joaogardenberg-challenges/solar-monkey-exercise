import React from 'react';

import '../stylesheets/Appointment.scss';

const Appointment = ({ data = {} }) => {
  const description = data.description ? (
    <p className="appointment-description">
      { data.description }
    </p>
  ) : null;

  return (
    <div className={ `appointment ${data.className}` }>
      <div className="drag-top" />
      <h4 className="appointment-category">
        { data.category }
      </h4>
      { description }
      <div className="drag-bottom" />
    </div>
  );
};

export default Appointment;
