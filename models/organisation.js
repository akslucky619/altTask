var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema(
  {
    name: {
      type: String
    },
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: "Team"
      }
    ],
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organisation", OrganisationSchema);
