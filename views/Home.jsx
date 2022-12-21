const React = require("react")
const DefaultLayout = require('./Default')


class Home extends React.Component {
    render() {
        return(
            <DefaultLayout title="Welcome to Cody's Survival Shop">
          <div>
            <link rel="stylesheet" type="text/css" href="../css/home.css"/>
            <a href="/survivalitems" className="button-54">Cody's Survival Item inventory</a>
          </div>
          </DefaultLayout>
        )
    }
}
module.exports = Home