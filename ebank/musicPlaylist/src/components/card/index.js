import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Card = props => {
  const {data, deletedata} = props
  const {imageUrl, name, genre, id, duration} = data
  return (
    <li className="card-main">
      <div className="card-top">
        <img src={imageUrl} alt="track" className="img" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="right">
        <p>{duration}</p>
        <button type="button" id="testid" onClick={() => deletedata(id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Card
