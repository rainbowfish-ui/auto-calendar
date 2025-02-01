import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  context: string;
  logo: string;
  teams: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    context: { type: String, required: true },
    logo: { type: String, required: false },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
