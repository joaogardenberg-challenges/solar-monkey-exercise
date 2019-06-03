import React from 'react';

import '../stylesheets/EntryModal.scss';

const EntryModal = () => {
  return (
    <div className="entry-modal open">
      <div className="modal-overlay" />
      <div className="modal-body">
        <form>
          <div className="form-row">
            <input type="text" placeholder="Start" />
            <button type="button">Esc</button>
          </div>
          <div className="form-row">
            <select>
              <option disabled selected>Category</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Description" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="End"/>
            <button type="submit">Press enter to save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntryModal;
