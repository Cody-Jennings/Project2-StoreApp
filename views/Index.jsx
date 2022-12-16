const React = require("react")
const DefaultLayout = require('./Default')

class Index extends React.Component {
  render() {
    const { allSurvivalItems } = this.props

    return (
      <DefaultLayout title={"Codys Survival Items"}>
        <link rel="stylesheet" type="text/css" href="../css/index.css" />
        <ul>
          {allSurvivalItems.map((survivalitems, i) => {
            return (
              <li>
                <div className="product-container">
                  <div className="product-name">{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}'s<br></br>Price: ${survivalitems.price}</div><br></br>
                  {/* <div className="product-price">Price: ${survivalitems.price}</div> */}
                  <a href={`/survivalitems/${survivalitems.id}`}><img src={survivalitems.image}></img></a>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="links">
          <nav>
            <a href='/survivalitems/new'>Add a New Survival Item</a> | <a href="/">Back to Cody's Survival Shop Home</a>
          </nav>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index