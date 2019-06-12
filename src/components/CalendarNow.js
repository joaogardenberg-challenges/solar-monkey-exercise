import React from 'react';

class CalendarNow extends React.Component {
  state = {
    position: this.getPosition()
  };

  render() {
    return (
      <div
        className="calendar-now"
        style={{ top: `calc(100% / 9 * ${this.state.position})` }}
      />
    );
  }

  componentDidMount() {
    this.interval = setInterval(this.setPosition, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPosition() {
    const now     = new Date();
    const hours   = now.getHours();
    const minutes = now.getMinutes();

    return hours + minutes / 60;
  }

  setPosition = () => {
    this.setState({ position: this.getPosition() })
  }
}

export default CalendarNow;