const React = require('react')
// const DefaultLayout = require('./Default')

class Edit extends React.Component{
    render() {
      const { survivalitems } = this.props
      return (
        <div className="container">
        <h1>Edit Survival Item</h1>  
        <link rel="stylesheet" type="text/css" href="/css/edit.css"/>    
        <form action={`/survivalitems/${survivalitems.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={survivalitems.name}/><br/>
            Inventory: <input type="number" name="inventory" defaultValue={survivalitems.inventory}/><br/>
            Price: <input type="number" name="price" defaultValue={survivalitems.price}/><br/>
            Image: <input type="text" name="image" defaultValue={survivalitems.image}/><br/>

            <input className="button-54" type="submit" value="Submit Changes"/>
        </form>
        </div>
      )
    }
  }
  module.exports= Edit