const React = require("react")
const DefaultLayout = require('./Default')
// const backgroundImageUrl = 'https://s.abcnews.com/images/US/survivalists-preppers-abc-jef-171102_16x9_1600.jpg';


class Home extends React.Component {
    render() {
        return(
            <DefaultLayout title="Welcome to Cody's Survival Shop">
          <div className="home-container">
            <link rel="stylesheet" type="text/css" href="../css/home.css"/>
            <a href="/survivalitems" className="button-54">Cody's Survival Item inventory</a>
          </div>
          </DefaultLayout>
        )
    }
}
module.exports = Home