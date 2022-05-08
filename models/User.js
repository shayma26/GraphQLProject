const { model, Schema } = require("mongoose"); //A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
const userSchema = new Schema({
  username: String,//we specified that it's required on GraphQL layer
  password: String,
  email: String,
  createdAt: String,
});
module.exports = model("User", userSchema);
