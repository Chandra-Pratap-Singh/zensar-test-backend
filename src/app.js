const app = require("express")();

app.listen(process.env.PORT || 3000, () =>
  console.log("App is listening up and running")
);
