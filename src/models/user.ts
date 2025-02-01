import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  image?: string;
  role: "Admin" | "Member"; // Define roles if needed
  teams: Types.ObjectId[]; // Teams the user is part of
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed passwords
    image: { type: String },
    role: { type: String, enum: ["Admin", "Member"], default: "Member" },
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
