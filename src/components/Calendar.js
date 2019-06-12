import React from 'react';

import                     '../stylesheets/Calendar.scss';
import CalendarHeader from './CalendarHeader';
import CalendarHour   from './CalendarHour';
import CalendarNow    from './CalendarNow';

const Calendar = ({ openModal }) => {
  const appointments = [
    { className: 'active start red',                         category: 'Red',    description: 'Description' },
    { className: 'active end red',                           category: 'Red',    description: 'Description' },
    { className: 'active start end followed yellow',         category: 'Yellow' },
    { className: 'active start follows green',               category: 'Green',  description: 'Description' },
    { className: 'active green',                             category: 'Green',  description: 'Description' },
    { className: 'active end green',                         category: 'Green',  description: 'Description' },
    { className: 'active start end followed red',            category: 'Red' },
    { className: 'active start end followed follows yellow', category: 'Yellow', description: 'Description' },
    { className: 'active start end follows green',           category: 'Green' },
  ];

  return (
    <div className="calendar">
      <CalendarHeader />
      <ul>
        <CalendarHour label="00" appointment={ appointments[0] } />
        <CalendarHour label="01" appointment={ appointments[1] } />
        <CalendarHour label="02" />
        <CalendarHour label="03" appointment={ appointments[2] } />
        <CalendarHour label="04" appointment={ appointments[3] } />
        <CalendarHour label="05" appointment={ appointments[4] } />
        <CalendarHour label="06" appointment={ appointments[5] } />
        <CalendarHour label="07" />
        <CalendarHour label="08" />
        <CalendarHour label="09" appointment={ appointments[6] } />
        <CalendarHour label="10" appointment={ appointments[7] } />
        <CalendarHour label="11" appointment={ appointments[8] } />
        <CalendarHour label="12" />
        <CalendarHour label="13" appointment={ appointments[9] } />
        <CalendarHour label="14" appointment={ appointments[10] } />
        <CalendarHour label="15" />
        <CalendarHour label="16" />
        <CalendarHour label="17" />
        <CalendarHour label="18" />
        <CalendarHour label="19" />
        <CalendarHour label="20" />
        <CalendarHour label="21" />
        <CalendarHour label="22" />
        <CalendarHour label="23" />
        <CalendarNow />
      </ul>
      <button onClick={ openModal }>New</button>
    </div>
  );
};

export default Calendar;
