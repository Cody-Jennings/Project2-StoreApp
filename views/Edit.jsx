const React = require('react')
const DefaultLayout = require('./Default')

class Edit extends React.Component{
    render() {
      const { survivalitems } = this.props
      return (
        <DefaultLayout title="Edit Survival Item">  
        {/* <link rel="stylesheet" type="text/css" href="../css/style.css"/>     */}
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
        <form action={`/survivalitems/${survivalitems.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={survivalitems.name}/><br/>
            Inventory: <input type="number" name="inventory" defaultValue={survivalitems.inventory}/><br/>
            Price: <input type="number" name="price" defaultValue={survivalitems.price}/><br/>
            Image: <input type="text" name="image" defaultValue={survivalitems.image}/><br/>

            <input type="submit" value="Submit Changes"/>
        </form>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit