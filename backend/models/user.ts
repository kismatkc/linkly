import {Document, Model, Schema} from "mongoose";
export interface userType  {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};



const USERSCHEMA = new Schema<userType   & Document>({
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
  },
  password: {
    type: String,
    required: true,
  }
})


const User= new Model("User", "USERSCHEMA")

export default User;