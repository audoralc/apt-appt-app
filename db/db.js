var mongoose = require("mongoose");
//moongoose.connect('mongodb://');

//Appointment schema
var ApptSchema = new mongoose.Schema({
  day: String,
  time: String,
  name: String,
  email: String
});

const Appt = mongoose.model("Appt", ApptSchema);
