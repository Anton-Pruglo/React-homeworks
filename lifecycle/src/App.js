import { Component } from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      value: 0,
      isPlaying: false,
    };
    this.state = this.initialState;
  }

  reset = () => {
    this.setState(this.initialState);
  };

  setValue = (value) => {
    this.setState({
      value,
    });
  };

  togglePlay = () => {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying,
    });
  };

  decrement = () => {
    const { value } = this.state;
    this.setValue(value - 1);
  };

  increment = () => {
    const { value } = this.state;
    this.setValue(value + 1);
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.isPlaying !== prevState.isPlaying) {
      if (this.state.isPlaying) {
        this.intervalId = setInterval(this.increment, 1000);
      } else {
        clearInterval(this.intervalId);
      }
    }
  }

  render() {
    const { value, isPlaying } = this.state;
    return (
        <article style={styles}>
          <h1>{value}</h1>
          <div>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <button onClick={this.togglePlay}>{isPlaying ? 'stop' : 'start'}</button>
            <button onClick={this.reset}>reset</button>
          </div>
        </article>
    );
  }
}