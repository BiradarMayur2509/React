const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="profile"
        className="profile-img"
      />
      <h1 className="name">Kiran V</h1>
      <p className="description">
        Vishu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="watch"
        className="watch-img"
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"))
