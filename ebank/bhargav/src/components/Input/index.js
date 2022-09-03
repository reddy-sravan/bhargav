import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

class Input extends Component {
  state = {
    array: [],
    input: '',
  }

  inputChange = e => {
    this.setState({input: e.target.value})
  }

  addInput = () => {
    const {input} = this.state
    const add = uuid()
    this.setState(prevState => ({
      array: [...prevState.array, {id: add, name: input}],
      input: '',
    }))
  }

  getUserInputs = array =>
    array.map(each => (
      <li key={each.id}>
        <p>
          {each.name} : <span>{each.name.length}</span>
        </p>
      </li>
    ))

  render() {
    const {array, input} = this.state
    return (
      <form className="main">
        <div className="left">
          <div className="left-top">
            <h1 className="tag">Count the characters like a Boss</h1>
          </div>
          <div className="left-bottom">
            <ul>
              {array.length > 0 ? (
                this.getUserInputs(array)
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              )}
            </ul>
          </div>
        </div>
        <div className="right">
          <h1 className="right-para">Character Counter</h1>
          <div className="right-bottom">
            <input
              type="text"
              value={input}
              className="inp"
              onChange={this.inputChange}
              placeholder="Enter the Characters here"
            />
            <button type="button" onClick={this.addInput}>
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Input
