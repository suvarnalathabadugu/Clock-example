import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('Constructor Called')
  }

  componentDidMount() {
    console.log('Component DidMount Called')
    this.timeId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('Component will unmount')
    clearInterval(this.timeId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('Render Called', date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
