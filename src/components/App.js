import React from 'react';

import                 '../stylesheets/App.scss';
import Calendar   from './Calendar';
import EntryModal from './EntryModal';

class App extends React.Component {
  state = {
    modalOpened: false
  };

  render() {
    return (
      <div className="app">
        <Calendar openModal={ this.openModal }/>
        { this.renderModal() }
      </div>
    );
  }

  renderModal() {
    return this.state.modalOpened
      ? <EntryModal closeModal={ this.closeModal } />
      : null;
  }

  openModal = () => {
    this.setState({ modalOpened: true });
  };

  closeModal = () => {
    this.setState({ modalOpened: false });
  };
}

export default App;
