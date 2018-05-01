const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("api/appts", (req, res) => {
  res.send({
    appointments: [
      {
        day: "Monday",
        time: "9:00am",
        name: "Bob Boberson",
        email: "bob@boberson.com"
      },
      {
        day: "Thursday",
        time: "2:00pm",
        name: "Sally Sue",
        email: "sally@sue.awesome"
      }
    ]
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
