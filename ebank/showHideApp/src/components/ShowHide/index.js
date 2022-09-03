import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    last: false,
  }

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="main-container">
        <div className="main-sub">
          <h1 className="heading">Show/Hide</h1>
          <div className="bottom-con">
            <div>
              <button onClick={this.firstName} type="button">
                Show/Hide Firstname
              </button>
              {first && <p className="first">Joe</p>}
            </div>
            <div>
              <button onClick={this.lastName} type="button">
                Show/Hide Lastname
              </button>
              {last && <p className="first">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
