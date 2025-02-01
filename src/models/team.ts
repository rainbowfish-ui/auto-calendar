import mongoose, { Schema, Document, Types } from "mongoose";
import { ITask } from "./task";

export interface ITeam extends Document {
  name: string;
  members: Types.ObjectId[];
  tasks: ITask[];
  createdAt: Date;
  updatedAt: Date;
}

const TeamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

export default mongoose.models.Team ||
  mongoose.model<ITeam>("Team", TeamSchema);
