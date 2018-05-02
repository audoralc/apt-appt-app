const express = require("express");
const app = express();
const fs = require("fs");
const router = require("express").Router();

const port = process.env.PORT || 5000;

var server = app.listen(port, () => console.log(`Listening on port ${port}`));

/*mock data endpoints
router.post("/book/", created);
router.get("/appts/", file(appts.json));
router.put("/update/:id/", file(appts.json));
router.delete("/cancel/:id", file(appts.json));

function file(filename) {
  return (req, res) => {
    res.writeHead(200, "OK");
    fs.createReadStream(filename).pipe(res);
  };
}

function created(req, res) {
  res.writeHead(201, "Created");
  res.end();
} */

//tester API
app.get("/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

//create appt
app.post("/book", (req, res) => {
  /* if mongoose  
  Appt.create(
    {
      day: req.body.day,
      time: req.body.time,
      name: req.body.name,
      phone: req.body.phone
    },
  */
  res.send("You booked an appt.");
});

//get all appts
app.get("/appts", (req, res) => {
  res.send("You fetched all appts.");
});

//update an appt
app.put("/update/:id", (req, res) => {
  res.send("You updated an appt.");
});

// delete an appt
app.delete("/cancel/:id", (req, res) => {
  res.send("Delete request for an appt.");
});
