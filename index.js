const express = require("express")
const app = express()

const PORT = 8000


app.set("view engine", "ejs")
// routes
app.get("/", (req, res) => {
  res.render("index")
})

app.get("/air", (req, res) => {
  res.render ("show", {element: elements.air})
})

app.get("/water", (req, res) => {
  res.render ("show", {element: elements.water})
})

app.get("/fire", (req, res) => {
  res.render("show", {element:elements.fire})
})

app.get("/earth", (req, res) => {
  res.render("show", {element:elements.earth})
})

app.listen(PORT, () => {
  console.log(`smooth smooth sounds of javascript comingfrom port ${PORT}`)
})