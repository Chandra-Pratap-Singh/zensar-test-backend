const app = require("express")();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
});

app.use("/user", userRouter);

app.use("/", (req, res) => res.status(200).json("working"));

mongoose
  .connect(
    process.env.DB_CONNECTION_STRING ||
      "mongodb+srv://chandra:3LriY1E3o0IFjoUP@e-restaurant.cn2vy.mongodb.net/zenser?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 4000, () =>
      console.log("App is listening up and running")
    );
  })
  .catch((err) => console.log(err));
