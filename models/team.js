var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TeamSchema = new Schema(
  {
    name: {
      type: String
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
