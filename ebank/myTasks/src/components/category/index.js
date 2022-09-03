import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const Category = ({filter, select}) => {
  console.log(select)
  return (
    <ul className="filterCon">
      {tagsList.map(each => (
        <li
          key={each.optionId}
          className={select === each.optionId ? 'btnselect' : 'btn'}
        >
          <button
            type="button"
            onClick={() => filter(each.optionId)}
            className="unset"
          >
            {each.displayText}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default Category
