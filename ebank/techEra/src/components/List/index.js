import {withRouter} from 'react-router-dom'

const List = props => {
  const {each} = props

  const handle = id => {
    const {history} = props
    history.push(`/courses/${id}`)
  }

  return (
    <li onClick={() => handle(each.id)} key={each.id}>
      <img src={each.logo_url} alt={each.name} />
      <p>{each.name}</p>
    </li>
  )
}

export default withRouter(List)
