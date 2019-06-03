import React from 'react';

const CalendarHeader = () => {
  return (
    <div className="calendar-header">
      <h1>Calendar</h1>
      <div className="calendar-date">
        <button>&#60;</button>
        <h2>{ new Date().toLocaleDateString('nl') }</h2>
        <button>&#62;</button>
      </div>
    </div>
  );
};

export default CalendarHeader;
