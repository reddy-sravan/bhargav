const AllCountries = ({each, add}) => (
  <li className="countryItem">
    <p className="countriesName">{each.name}</p>
    {!each.isVisited ? (
      <button
        className="visitButton"
        type="button"
        onClick={() => add(each.id)}
      >
        Visit
      </button>
    ) : (
      <p className="visitedButton" type="button">
        Visited
      </p>
    )}
  </li>
)

export default AllCountries
