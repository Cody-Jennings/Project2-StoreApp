require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000;
const Survival = require("./models/survival")
const methodOverride = require('method-override')

// Global configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

app.use(express.static('public'))


//connect to mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })



// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// const defaultSurvivalItems = [
//   {name: "chainsaw", inventory: 10, price: 300, img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=h…ads%2Fsites%2F49%2F2020%2F12%2F14%2F102334345.jpg"},
//   {name: "firestarter", inventory: 30, price: 16,  img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…l9mriMGrbiBRqVNnOxljyjKreZpKYfAIuwm3A+Wn2fYgf/9k="},
// ]

//Set up middleware
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
mongoose.set('strictQuery', true)

//view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Survival Store App!')
})

//Index route
app.get("/survivalitems", (req, res) => {
    Survival.find({}, (error, allSurvivalItems) => {
        res.render("Index", {
            allSurvivalItems: allSurvivalItems, // getting all survival items from db to pass as props
        })
    })
})

//New route to get a form to create a new pokemon record
app.get('/survivalitems/new', (req, res) => {
    res.render('New')
})

// Survival.insertMany(defaultSurvivalItems)
// // if database transaction succeeds
// .then((survivalitems) => {
//   console.log(survivalitems)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//Delete - Delete this one record        //This is the acronym INDUCES
app.delete('/survivalitems/:id', (req, res) => {
    Survival.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/survivalitems');//redirect back to pokemon index
    })
})

//Update - modifying a record


app.put('/survivalitems/buy/:id', (req, res) => {
    Survival.findById(req.params.id, (err, foundSurvivalItems) => {
        let newSurvivalItem = foundSurvivalItems
        newSurvivalItem.inventory = newSurvivalItem.inventory - 1

        Survival.findByIdAndUpdate(req.params.id, newSurvivalItem, (err, foundSurvivalItems) => {
            console.log('updated Survival')
            res.redirect(`/survivalitems/${req.params.id}`)
        })
    })
})

app.put('/survivalitems/:id', (req, res) => {
    Survival.findByIdAndUpdate(req.params.id, req.body, (err, allSurvivalItems) => {
        console.log(allSurvivalItems)
        res.redirect(`/survivalitems/${req.params.id}`)//redirecting to the Show page
    })
})
//Create - send the filled form to the database and create a new record
app.post('/survivalitems', (req, res) => {
    let survivalItem = req.body
    Survival.create(survivalItem, (error, createdSurvivalItems) => {
        res.redirect('/survivalitems')
    })
})

//Edit - go to database and get the record to update
app.get('/survivalitems/:id/edit', (req, res) => {
    Survival.findById(req.params.id, (err, foundSurvivalItems) => { //find the survival item
        if (!err) {
            res.render(
                'Edit',
                {
                    survivalitems: foundSurvivalItems //pass in the found pokemon so we can prefill the form
                }
            );
        } else {
            res.send({ msg: err.message })
        }
    })
})

//Show Route
app.get('/survivalitems/:id', (req, res) => {
    Survival.findById(req.params.id, (err, foundSurvivalItems) => {
        res.render("Show", { //second param must be an object
            survivalitems: foundSurvivalItems
        })
    })
})

app.listen(port, function () {
    console.log('Listening on port 3000');
});
