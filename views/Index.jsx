const React = require("react")
const DefaultLayout = require('./Default')

class Index extends React.Component {
  render() {
    const { allSurvivalItems } = this.props

    return (
      <DefaultLayout title={"Cody's Survival Items"}>
        <a name="top"></a>
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
        <div className="links">
          <nav>
            <br></br><a href='/survivalitems/new' className="button-54">Add a New Survival Item</a> | <a href="/" className="button-54">Back to Cody's Survival Shop Home</a><br></br>
          </nav>
        </div><ul>

          {allSurvivalItems.map((survivalitems, i) => {
            return (
              <li>
                <div className="product-container">
                  <div className="product-name">{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}<br></br>Price: ${survivalitems.price}</div><br></br>
                  <a href={`/survivalitems/${survivalitems.id}`}><img src={survivalitems.image}></img></a>
                </div>
              </li>
            )
          })}
        </ul>
        <a href="#top" className="button-54">Back to top</a>
      </DefaultLayout>
    )
  }
}

module.exports = Index