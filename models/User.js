const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation failed",
    },
  },

  thoughts: [
    {
      ref: "Thought",
      type: Schema.Types.ObjectId,
    },
  ],

  friends: [
    {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
  ],
});

const User = model("User", UserSchema);

module.exports = User;
