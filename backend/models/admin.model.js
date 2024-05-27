import mongoose from "mongoose";

const adminFormDataSchema = new mongoose.Schema({
  publisherURL: {
    type: String,
    match: [
      /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
      "Please fill a valid URL",
    ],
  },
  publisherName: { type: String, trim: true },
  publisherEmail: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  publisherPhoneNo: { type: Number },
  mozDA: { type: Number, min: 1, max: 100 },
  categories: { type: String },
  websiteLanguage: { type: String },
  ahrefsDR: { type: Number, min: 1, max: 100 },
  linkType: { type: String, enum: ["Do Follow", "No Follow"] },
  price: { type: Number, min: 1, max: 10000 },
  monthlyTraffic: { type: String },
  mozSpamScore: { type: String },
});

export default mongoose.model("AdminData", adminFormDataSchema);
