import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface userType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  googleId: String
}

const USERSCHEMA = new Schema<userType & Document>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: false,

  },googleId: {
    type: String,
    required: false
  }
});

USERSCHEMA.pre("save", async function (next) {
  const user = this as unknown as userType & Document;
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

const User = mongoose.model<userType & Document>("User", USERSCHEMA);

export default User;
