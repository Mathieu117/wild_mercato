require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.APP_PORT ?? "5000", 10);
const playersRouter = require("./routers/players.router");
const teamsRouter = require("./routers/teams.router");

app.use(express.json());

app.use("/players", playersRouter);
app.use("/teams", teamsRouter);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
