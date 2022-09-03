const Visited = ({each, remove}) => (
  <li className="visitedCountriesCon">
    <img src={each.imageUrl} alt="thumbnail" className="img" />
    <div className="visitedBottom">
      <p>{each.name}</p>
      <button
        type="button"
        onClick={() => remove(each.id)}
        className="removeBtn"
      >
        Remove
      </button>
    </div>
  </li>
)

export default Visited
