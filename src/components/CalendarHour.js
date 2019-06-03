import React from 'react';

import Appointment from './Appointment';

const CalendarHour = ({ label, appointment }) => {
  return (
    <li className="calendar-hour">
      <div className="hour-label">{ label }</div>
      <div className="hour-content">
        <Appointment data={ appointment } />
      </div>
    </li>
  );
};

export default CalendarHour;
