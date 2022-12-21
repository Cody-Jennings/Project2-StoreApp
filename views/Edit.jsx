const React = require('react')
// const DefaultLayout = require('./Default')

class Edit extends React.Component {
  render() {
    const { survivalitems } = this.props
    return (
      <div className="container">
        <h1>Edit Survival Item</h1>
        <link rel="stylesheet" type="text/css" href="/css/edit.css" />
        <form action={`/survivalitems/${survivalitems.id}?_method=PUT`} method="POST">
          <br></br><div className="formprops">Name: <input className="forminput" type="text" name="name" defaultValue={survivalitems.name} /><br />
            <br></br>Inventory: <input className="forminput" type="number" name="inventory" defaultValue={survivalitems.inventory} /><br />
            <br></br>Price: <input className="forminput" type="number" name="price" defaultValue={survivalitems.price} /><br />
            <br></br>Image jpg url: <input className="forminput" type="text" name="image" defaultValue={survivalitems.image} /></div><br />
          <br></br><input className="button-54" type="submit" value="Submit Changes" />
        </form>
        <div className='copyright'>
          <span>&copy; Cody Jennings</span>
        </div>
      </div>
    )
  }
}
module.exports = Edit