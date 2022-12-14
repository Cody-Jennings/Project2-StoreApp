const React = require("react")
const DefaultLayout = require('./Default')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
}

class Index extends React.Component {
  render() {
    const { allSurvivalItems } = this.props

    return (
      <DefaultLayout title={"Codys Survival Items"}>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        {/* <h1 style={myStyle}> See All The Pokemon </h1> */}
        <ul>
          {allSurvivalItems.map((survivalitems, i) => {
            return (
              <li>
                <p>{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}'s</p><br></br>
                <a href={`/survivalitems/${survivalitems.id}`}><img src={survivalitems.image}></img></a>
                {/* <br></br>
                <a href={`/survivalitems/${survivalitems.id}/edit`}>  Edit this Survival Item</a><br></br>
                <br></br> */}
              </li>
            )
          })}
        </ul>
          <nav>
            <a href='/survivalitems/new'>Add a New Survival Item</a>
          </nav>
      </DefaultLayout>
    )
  }
}

module.exports = Index