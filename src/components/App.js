import React from 'react';

import                 '../stylesheets/App.scss';
import Calendar   from './Calendar';
import EntryModal from './EntryModal';

const App = () => {
  return (
    <div className="app">
      <Calendar />
      <EntryModal />
    </div>
  );
};

export default App;
