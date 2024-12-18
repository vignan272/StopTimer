import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    time: 0,
    isStart: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId) // Clear the interval when the component is removed
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`
  }

  startStopTimer = () => {
    const {isStart} = this.state
    if (isStart) {
      clearInterval(this.intervalId) // Stop the timer
      this.setState({isStart: false})
    } else {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time + 1,
        }))
      }, 1000) // Start the timer
      this.setState({isStart: true})
    }
  }

  // Stop the timer
  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isStart: false})
  }

  // Reset the timer
  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({time: 0, isStart: false})
  }

  render() {
    const {time} = this.state
    return (
      <div className="bg">
        <div className="card1">
          <h1>Stopwatch</h1>
          <div className="card2">
            <div className="imgCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{this.formatTime(time)}</h1>
            <div className="buttonCard">
              <button
                className="button1"
                type="button"
                onClick={this.startStopTimer}
              >
                Start
              </button>
              <button
                className="button2"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="button3"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
