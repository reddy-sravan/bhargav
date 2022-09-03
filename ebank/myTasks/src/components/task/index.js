import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Category from '../category/index'
import Card from '../Card/index'
import classes from './index.module.css'

const options = [
  'Health',
  'Education',
  'Entertainment',
  'Sports',
  'Travel',
  'Others',
]

class Task extends Component {
  state = {
    data: [],
    filteredWith: '',
  }

  handleSubmit = e => {
    const id = uuid()
    e.preventDefault()
    const form = new FormData(document.getElementById('form'))
    const dataObj = {task: form.get('task'), category: form.get('category'), id}
    this.setState(prevState => ({data: [...prevState.data, dataObj]}))
    document.getElementById('form').reset()
  }

  filter = id => {
    const {filteredWith} = this.state
    if (filteredWith !== id) {
      this.setState({filteredWith: id})
    } else {
      this.setState({filteredWith: ''})
    }
  }

  render() {
    const {data, filteredWith} = this.state

    const filtered = data.filter(each => each.category === filteredWith)

    return (
      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <h1 className={classes.leftHeading}>Create a task!</h1>
          <form id="form" onSubmit={this.handleSubmit}>
            <div className={classes.inputCon}>
              <label htmlFor="task" className={classes.label}>
                Task
              </label>
              <input
                id="task"
                className={classes.input}
                placeholder="Enter the task here"
                name="task"
              />
            </div>
            <div className={classes.inputCon}>
              <label htmlFor="tag" className={classes.label}>
                Tags
              </label>
              <select id="tag" name="category" className={classes.input}>
                {options.map(option => (
                  <option value={option.toUpperCase()} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.addBtn}>
              <button type="submit">Add Task</button>
            </div>
          </form>
        </div>
        <div className={classes.right}>
          <h1 className={classes.tagHead}>Tags</h1>
          <Category filter={this.filter} select={filteredWith} />
          <h1 className={classes.tagHead}>Tasks</h1>
          {data.length === 0 && (
            <p className={classes.para}>No Tasks Added Yet</p>
          )}
          <ul>
            {data.length !== 0 &&
              filteredWith === '' &&
              data.map(each => <Card each={each} key={each.id} />)}
          </ul>
          <ul>
            {filteredWith !== '' &&
              filtered.map(each => <Card each={each} key={each.id} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Task
