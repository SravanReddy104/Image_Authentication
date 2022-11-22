const express = require("express");
// require("./.env").config()
const port = process.env.PORT | 9000;
const url = process.env.URL;
const app = express(url);

const cors = require("cors");
app.use(express.json());
app.use(cors());
const getDataRoute = require("./Routes/getDataRoute");
const mongoose = require("mongoose");
const dataRoute = require("./Routes/dataRoute");
const pushDataRoute = require("./Routes/PushDataRoute");
const userRoute = require("./Routes/userRoute");
const loginRoute = require("./Routes/LoginRoute");
mongoose.connect(
  "mongodb+srv://Sravan10:Sravan10@cluster0.z67btmg.mongodb.net/?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected to mongoDB!");
    } else {
      console.log("connection to mongoDB failed \n" + error);
    }
  }
);
const db = mongoose.connection;
app.use("/data", dataRoute);
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/getData", getDataRoute);
app.use("/pushData", pushDataRoute);

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
