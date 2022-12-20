const React = require("react")

class Show extends React.Component {
    render() {
        const { survivalitems } = this.props

        const renderForm = () => {
            if (survivalitems.inventory > 0) {
                return <div><p>There are currently <strong>{survivalitems.inventory}</strong> {survivalitems.name} left.</p><form action={`/survivalitems/buy/${survivalitems.id}?_method=PUT`} method="POST">
                    <input className="button-54" type="submit" value=" Buy " />
                </form>
                </div>
            } else {
                return <h3>Out Of Stock</h3>
            }
        }

        return (
            <div className='container'>
                <link rel="stylesheet" type="text/css" href="/css/show.css" />
                <h1>{survivalitems.name.charAt(0).toUpperCase() + survivalitems.name.slice(1)}</h1>
                <img src={survivalitems.image}></img><p>The {survivalitems.name} current price is <strong>${survivalitems.price}</strong>. <br></br></p>
                {renderForm()}<br></br><form action={`/survivalitems/${survivalitems._id}?_method=DELETE`} method="POST">
                    <input className="button-54" type="submit" value="DELETE" />
                </form>
                <br></br><a href={`/survivalitems/${survivalitems._id}/edit`} className="button-54">Edit This Survival Item</a> | <a href="/survivalitems" className="button-54">Back to Cody's Survival Shop</a>
            </div>
        )
    }
}

module.exports = Show