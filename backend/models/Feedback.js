// define the database structure
const mongoose = require("mongoose");
/*A Database schema is like a blueprint of your database. it defines datastructure example
{
id:objectid,
name:String,
email:String
}*/ 
const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    rating: { type: Number, required: true },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
