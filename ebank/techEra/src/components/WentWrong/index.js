const WentWrong = ({fetchAgain}) => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
    />
    <h1>Oops! Something Went Wrong</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <button type="button" onClick={() => fetchAgain()}>
      Retry
    </button>
  </div>
)

export default WentWrong
