const React = require('react')

class New extends React.Component {
    render() {
      return (
        <div>
          <link rel="stylesheet" type="text/css" href="../css/style.css"/>
          <h1>Add a New Survival Item</h1>
          <form action='/survivalitems' method='POST'>
            Name: <input type='text' name='name'/>
            <br />
            Inventory: <input type='number' name='inventory'/>
            <br />
            Price: <input type='number' name='price'/>
            <br />
            Image jpg url: <input type='text' name='image'/>
            <br />
            <br></br>
            <input type='submit' name='' value='Add this Survival Item'/>
          </form>
          <br></br>
          <a href="/survivalitems">Back to Survival Items</a>
        </div>
      )
    }
  }
  
  module.exports = New