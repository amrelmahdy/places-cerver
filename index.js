const dotenv = require('dotenv')
const env = dotenv.config()
if (env.error) {
    throw result.error
}
const express = require("express")
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const port = process.env.PORT || 3000

app.use(expressLayouts)
app.use("/public", express.static(path.join(__dirname, "public")));


// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'))
// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html')
app.set('layout', 'layouts/master-layout');


app.get("/", (req, res) => {
    res.render("index")
})


app.listen(port, () => {
    console.log(`app is listening to port : ${port}`)
})