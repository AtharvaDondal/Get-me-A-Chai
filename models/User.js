import mongoose from "mongoose";
const { Schema} = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String },
  username: { type: String, required: true }, // String is shorthand for {type: String}
  profilepic: String,
  coverpic: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
