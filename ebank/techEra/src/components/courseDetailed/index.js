import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import WentWrong from '../WentWrong'
import './index.css'

const initial = {
  initial: 'initial',
  loading: 'loading',
  failure: 'failure',
  success: 'success',
}

class CourseDetailed extends Component {
  state = {
    detail: {},
    status: initial.initial,
  }

  componentDidMount = () => {
    this.fetchAgain()
  }

  fetchAgain = async () => {
    this.setState({status: initial.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const url = `https://apis.ccbp.in/te/courses/${id}`
      const res = await fetch(url, {method: 'GET'})
      const detail = await res.json()
      this.setState({detail: detail.course_details, status: initial.success})
    } catch {
      this.setState({status: initial.failure})
    }
  }

  Loader = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  success = () => {
    const {detail} = this.state
    return (
      <>
        <div className="main-con">
          <img className="img" src={detail.image_url} alt={detail.name} />
          <div>
            <h1>{detail.name}</h1>
            <p>{detail.description}</p>
          </div>
        </div>
      </>
    )
  }

  failure = () => <WentWrong fetchAgain={this.fetchAgain} />

  getMain = () => {
    const {status} = this.state
    switch (status) {
      case initial.success:
        return this.success()
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

export default CourseDetailed
