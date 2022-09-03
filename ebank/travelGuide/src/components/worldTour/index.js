import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class WorldTour extends Component {
  state = {
    data: [],
  }

  componentDidMount = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    const res = await fetch(url, options)
    const data = await res.json()
    this.setState({data: data.packages})
  }

  render() {
    const {data} = this.state
    return (
      <div className="mainContainer">
        <h1 className="mainHeading">Travel Guide</h1>
        {data.length === 0 ? (
          <div testid="loader" className="div">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {data.map(each => (
              <li key={each.id} className="list">
                <img src={each.image_url} alt={each.name} />
                <h1 className="heading">{each.name}</h1>
                <p>{each.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default WorldTour
