const React = require('react')

class New extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Add a New Survival Item</h1>
        <link rel="stylesheet" type="text/css" href="/css/new.css" />
        <form action='/survivalitems' method='POST'>
          <br></br><div className="formprops">Name: <input className="forminput" type='text' name='name' /><br />
            <br></br>Inventory: <input className="forminput" type='number' name='inventory' /><br />
            <br></br> Price: <input className="forminput" type='number' name='price' /><br />
            <br></br>Image jpg url: <input className="forminput" type='text' name='image' /></div><br />
          <br></br>
          <input className="button-54" type='submit' name='' value='Add this Survival Item' />
        </form>
        <br></br>
        <a href="/survivalitems" className="button-54">Back to Cody's Survival Items</a>
        <div className='copyright'>
          <span>&copy; Cody Jennings</span>
        </div>
      </div>
    )
  }
}

module.exports = New