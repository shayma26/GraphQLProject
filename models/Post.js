const { model, Schema } = require("mongoose");
const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",//"users" is a collection that allows mongoose to automatically populate this users field without use of other methods
  },
});
module.exports = model("Post", postSchema);
