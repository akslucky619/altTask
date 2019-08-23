var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bcrypt = require(bcrypt);
const saltRounds = 10;

var UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    organisation: {
      type: Schema.Types.ObjectId,
      ref: "Organisation"
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);
