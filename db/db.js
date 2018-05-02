var mongoose = require("mongoose");
//moongoose.connect('mongodb://');

//Appointment schema
var ApptSchema = new mongoose.Schema({
  day: String,
  time: String,
  name: String,
  phone: String
});

const Appt = mongoose.model("Appt", ApptSchema);
