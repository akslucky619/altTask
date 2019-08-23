var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemberSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    Phone: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
