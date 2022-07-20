import React from 'react';
import './App.css';


class Stopwatch extends React.Component {

    state = {
        tens: 0,
        seconds: 0,
        interval: undefined
    }

    startTimer = () => {
        this.setState((lastState) => {
            let tens = lastState.tens;
            let seconds = lastState.seconds;
            tens = tens + 1

            if(tens > 99){
                tens = 0
                seconds = seconds + 1
            }

            return {
                tens: tens,
                seconds: seconds
            }
        });
    }

    handleStartButton = () => {
        clearInterval(this.state.interval);
        const interval = setInterval(this.startTimer, 10);

        this.setState({
            interval: interval
        });
    }

    handleStopButton = () => {
        clearInterval(this.state.interval);
    }

    handleResetButton = () => {
        alert('reset')
    }

    render() {
        const seconds = this.state.seconds < 9 ? "0" + this.state.seconds : this.state.seconds;
        const tens = this.state.tens < 9 ? "0" + this.state.tens : this.state.tens;

        return (
            <div>
                <p>{seconds}:{tens}</p>
                <button
                    onClick={this.handleStartButton}
                    className="button"
                >
                    Start
                </button>
                <button
                    onClick={this.handleStopButton}
                    className="button">
                    Stop
                </button>
                <button
                    onClick={this.handleResetButton}
                    className="button">
                    Reset
                </button>
            </div>
        )
    }
}



function App() {
  return (
    <div className="wrapper">
        <h1>Stopwatch</h1>
        <h2>JavaScript Stopwatch</h2>
        <Stopwatch />
    </div>
  );
}

export default App;
