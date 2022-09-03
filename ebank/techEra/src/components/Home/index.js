import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import List from '../List'
import WentWrong from '../WentWrong'
import './index.css'

const initial = {
  initial: 'initial',
  loading: 'loading',
  failure: 'failure',
  success: 'success',
}

class Home extends Component {
  state = {
    data: [],
    status: initial.initial,
  }

  componentDidMount = async () => {
    this.fetchAgain()
  }

  fetchAgain = async () => {
    this.setState({status: initial.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok) {
      this.setState({data: data.courses, status: initial.success})
    } else {
      this.setState({status: initial.failure})
    }
  }

  Loader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  success = data => (
    <>
      <div className="courses-con">
        <h1>Courses</h1>
        <ul>
          {data.map(each => (
            <Link to={`/courses/${each.id}`}>
              <List each={each} key={each.id} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  )

  failure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={() => this.fetchAgain()}>
        Retry
      </button>
    </div>
  )

  getMain = () => {
    const {status, data} = this.state
    switch (status) {
      case initial.success:
        return this.success(data)
      case initial.loading:
        return this.Loader()
      case initial.failure:
        return this.failure()
      default:
        return this.Loader()
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-con">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
              width="150px"
              height="100px"
            />
          </Link>
        </nav>

        {this.getMain()}
      </div>
    )
  }
}

export default Home
