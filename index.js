const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const searchRoute = require("./routes/search");

dotenv.config();

mongoose
  .connect(mongodb+srv://kunal:kunal@cluster0.mc658.mongodb.net/netflix?retryWrites=true&w=majority, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successfull"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/search", searchRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running");
});
