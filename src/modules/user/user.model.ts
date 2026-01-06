import { Schema, model } from "mongoose";
import { type SignUpUser } from "./user.types.js";

const UserSchema = new Schema<SignUpUser>(
  {
    fullname: { type: String, required: true, trim: true, minlength: 2 },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: { type: String, unique: true, sparse: true }, // sparse allows null/optional unique
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    profilePicture: { type: String, default: null },
    gender: { type: Number, enum: [0, 1, 2], default: 2 },
  },
  {
    timestamps: true, // auto add createdAt, updatedAt
  }
);

// Indexing for performance
UserSchema.index({ email: 1 });
UserSchema.index({ username: 1 });
UserSchema.index({ phoneNumber: 1 });

export const UserModel = model<SignUpUser>("User", UserSchema);
