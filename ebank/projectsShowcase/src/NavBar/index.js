import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const stat = {
  loading: 'loading',
  success: 'success',
  failure: 'failure',
  initial: 'initial',
}

class ShowCase extends Component {
  state = {
    category: categoriesList[0].id,
    status: stat.initial,
    data: [],
  }

  componentDidMount = () => {
    this.getAllRelated()
  }

  handleSearch = event => {
    this.setState({category: event.target.value}, () => {
      this.getAllRelated()
    })
  }

  getAllRelated = async () => {
    this.setState({status: stat.loading})
    const {category} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${category}`
    const res = await fetch(url, {method: 'GET'})
    const data = await res.json()
    if (res.ok === true) {
      this.setState({data: data.projects, status: stat.success})
    } else {
      this.setState({status: stat.failure})
    }
  }

  loading = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  failure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button onClick={() => this.getAllRelated()}>Retry</button>
    </div>
  )

  success = () => {
    const {data} = this.state
    return (
      <ul>
        {data.map(each => (
          <li key={each.id}>
            <img src={each.image_url} alt={each.name} />
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    )
  }

  getView = () => {
    const {status} = this.state
    switch (status) {
      case stat.failure:
        return this.failure()
      case stat.loading:
        return this.loading()
      case stat.success:
        return this.success()
      default:
        return null
    }
  }

  render() {
    const {category} = this.state
    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="nav-img"
          />
        </nav>
        <div className="selectMainCon">
          <select value={category} onChange={this.handleSearch}>
            {categoriesList.map(each => (
              <option value={each.id} key={each.id}>
                {each.displayText}
              </option>
            ))}
          </select>
          {this.getView()}
        </div>
      </div>
    )
  }
}
export default ShowCase
