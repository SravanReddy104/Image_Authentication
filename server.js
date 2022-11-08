const express = require("express")
// require("./.env").config()
const port = process.env.PORT | 9000;
const app = express()
const animalsRoute = require("./Routes/animalsRoute")
// const fruitsRoute = require("./Routes/fruitsRoute")
// const electronicsRoute = require("./Routes/electronicsRoute")
// const emojisRoute = require("./Routes/emojisRoute")
// const vehiclesRoute = require("./Routes/vehiclesRoute")
app.use(express.json())
app.use("/animal",animalsRoute)
// app.use("/fruits",fruitsRoute)
// app.use("/electronics",electronicsRoute)
// app.use("/emojis",emojisRoute)
// app.use("/vehicles",vehiclesRoute)



app.listen(port,()=>{console.log(`server is listening at ${port}`)})
