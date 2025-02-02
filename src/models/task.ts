import mongoose, { Schema, Types } from "mongoose";

export interface ITask {
  name: string;
  assignedTo: Types.ObjectId[];
  status: "Not Started" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  progress: number;
  due: string;
  keyPoints: string;
  lastUpdate: string;
  lastUpdateBy: Types.ObjectId;
  lastUpdateOn: string;
}

export const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  progress: { type: Number, min: 0, max: 100, default: 0 },
  due: { type: String, required: true },
  keyPoints: [{ type: String }],
  lastUpdate: { type: String },
  lastUpdateBy: { type: Schema.Types.ObjectId, ref: "User" },
  lastUpdateOn: { type: String },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", TaskSchema);
