const React = require("react")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Show extends React.Component {
    render() {
        const { survivalitems } = this.props
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../css/style.css" />
                <h1>{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}'s</h1>
                <img src={survivalitems.image}></img>
                <p>There are currently {survivalitems.inventory} {survivalitems.name}'s left. <br></br></p>
                <p>There {survivalitems.name}'s current price is {survivalitems.price}. <br></br></p>
                {/* <br></br><a href={`/survivalitems/${survivalitems._id}/edit`}>Edit This Survival Item</a> */}
                <form action={`/survivalitems/${survivalitems._id}?_method=DELETE`} method="POST">
                    <br></br><input type="submit" value="DELETE" />
                </form>
                <br></br>
                <br />
                <a href="/survivalitems">Back to Cody's Survival Shop</a>
            </div>
        )
    }
}

module.exports = Show