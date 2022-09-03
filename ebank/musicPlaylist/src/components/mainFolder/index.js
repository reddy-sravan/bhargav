import {Component} from 'react'
import Card from '../card'
import './index.css'

class MainComponent extends Component {
  state = {
    input: '',
  }

  inputChange = e => {
    this.setState({input: e.target.value})
  }

  deletedata = id => {
    const {deleteTheData} = this.props
    deleteTheData(id)
  }

  getCards = filteredData => (
    <ul>
      {filteredData.map(each => (
        <Card data={each} deletedata={this.deletedata} key={each.id} />
      ))}
    </ul>
  )

  render() {
    const {TracksList} = this.props
    const {input} = this.state
    const filteredData = TracksList.filter(each =>
      each.name.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div>
        <div className="main">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
        <div className="bottom-con">
          <div className="b-top">
            <h1>Songs playlist</h1>
            <input
              type="search"
              value={input}
              onChange={this.inputChange}
              placeholder="Search"
            />
          </div>
          {filteredData.length > 0 ? (
            this.getCards(filteredData)
          ) : (
            <p className="noSongs">No Songs Found</p>
          )}
        </div>
      </div>
    )
  }
}

export default MainComponent
