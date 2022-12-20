const React = require("react")
const DefaultLayout = require('./Default')

class Index extends React.Component {
  render() {
    const { allSurvivalItems } = this.props

    return (
      <DefaultLayout title={"Codys Survival Items"}>
        <a name="top"></a>
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
        <div className="links">
          <nav>
            <br></br><a href='/survivalitems/new'>Add a New Survival Item</a> | <a href="/">Back to Cody's Survival Shop Home</a><br></br>
          </nav>
        </div><ul>

          {allSurvivalItems.map((survivalitems, i) => {
            return (
              <li>
                <div className="product-container">
                  <div className="product-name">{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}'s<br></br>Price: ${survivalitems.price}</div><br></br>
                  <a href={`/survivalitems/${survivalitems.id}`}><img src={survivalitems.image}></img></a>
                </div>
              </li>
            )
          })}
        </ul>
        <a href="#top">Back to top</a>
      </DefaultLayout>
    )
  }
}

module.exports = Index