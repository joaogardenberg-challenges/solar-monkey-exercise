import React from 'react';

import '../stylesheets/EntryModal.scss';

class EntryModal extends React.Component {
  state = {
    start: '',
    category: '',
    description: '',
    end: ''
  };

  render() {
    const { start, category, description, end } = this.state;

    return (
      <div className="entry-modal open">
        <div className="modal-overlay"/>
        <div className="modal-body">
          <form onSubmit={ this.onFormSubmit }>
            <div className="form-row">
              <input
                name="start"
                type="text"
                placeholder="Start"
                onChange={ (event) => this.onValueChange(event, 'start') }
                value={ start }
              />
              <button
                type="button"
                onClick={ this.onCloseClick }
              >
                Esc
              </button>
            </div>
            <div className="form-row">
              <select
                name="category"
                onChange={ (event) => this.onValueChange(event, 'category') }
                defaultValue={ category }
              >
                <option disabled value=''>Category</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="form-row">
              <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={ (event) => this.onValueChange(event, 'description') }
                value={ description }
              />
            </div>
            <div className="form-row">
              <input
                name="end"
                type="text"
                placeholder="End"
                onChange={ (event) => this.onValueChange(event, 'end') }
                value={ end }
              />
              <button type="submit">Press enter to save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.onkeydown = this.onKeyPress;
  }

  onKeyPress = (event) => {
    if (event.key === 'Escape') {
      this.onCloseClick();
    } else if (event.key === 'Enter') {
      this.onFormSubmit(event);
    }
  };

  onValueChange = ({ target: { value } }, input) => {
    this.setState({ [input]: value });
  };

  onFormSubmit = (event) => {
    const { start, category, description, end } = this.state;

    event.preventDefault();

    console.log(`Start: ${start}, Category: ${category}, Description: ${description}, End: ${end}`);

    this.props.closeModal();
  };

  onCloseClick = () => {
    this.props.closeModal();
  };
}

export default EntryModal;
