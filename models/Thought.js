const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    minLength: 1,
    maxLength: 280,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // getter method here
  },

  username: {
    type: String,
    required: true,
  },

  reactions: {
    // check that the below is correct
    children: [],
    child: reactionSchema,
  },
});
