const React = require("react")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Show extends React.Component {
    render() {
        const { survivalitems } = this.props

        const renderForm = () => {
            if (survivalitems.inventory > 0) {
                return <div><form action={`/survivalitems/buy/${survivalitems.id}?_method=PUT`} method="POST">
                    <input type="submit" value=" Buy " />
                </form>
                    <p>There are currently {survivalitems.inventory} {survivalitems.name}'s left.</p>
                </div>
            } else {
                return <h3>Out Of Stock</h3>
            }
        }


        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../css/style.css" />
                <h1>{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}'s</h1>
                <img src={survivalitems.image}></img>{renderForm()}
                {/* <form action={`/survivalitems/buy/${survivalitems.id}?_method=PUT`} method="POST">
                    <input type="submit" value=" Buy " />
                </form> */}
                {/* <p>There are currently {survivalitems.inventory} {survivalitems.name}'s left. <br></br></p> */}
                <p>The {survivalitems.name}'s current price is ${survivalitems.price}. <br></br></p>
                
                <form action={`/survivalitems/${survivalitems._id}?_method=DELETE`} method="POST">
                    <br></br><input type="submit" value="DELETE" />
                </form>
                <br></br>
                <br />
                <br></br><a href={`/survivalitems/${survivalitems._id}/edit`}>Edit This Survival Item</a> | <a href="/survivalitems">Back to Cody's Survival Shop</a>
            </div>
        )
    }
}

module.exports = Show