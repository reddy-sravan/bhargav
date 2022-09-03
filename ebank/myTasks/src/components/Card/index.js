import './index.css'

const Card = ({each}) => {
  const {task, category} = each
  return (
    <li className="card">
      <p className="c-para">{task}</p>
      <p type="button">{category}</p>
    </li>
  )
}

export default Card
