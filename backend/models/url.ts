import mongoose, { Document, Schema } from "mongoose";

export interface urlType {
  shortLink: string;
  originalLink: string;
  status: string;
  date: Date;
}

const USERSCHEMA = new Schema<urlType & Document>({
  shortLink: {
    type: String,
    required: true,
  },
  originalLink: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Active"

  },
  date: {
    type: Date,
    required: true,
    default: Date.now

  }
});


const Url = mongoose.model<urlType & Document>("Url", USERSCHEMA);

export default Url;
