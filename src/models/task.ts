import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITask {
  name: string;
  assignedTo: Types.ObjectId[]; // References to User IDs
  status: "Not Started" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  progress: number;
  due: string;
  keyPoints: string[];
  lastUpdate: string;
  lastUpdateBy: Types.ObjectId; // Reference to User ID
  lastUpdateOn: string;
}

export const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: "User", required: true }], // Reference to User model
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  progress: { type: Number, min: 0, max: 100, required: true },
  due: { type: String, required: true },
  keyPoints: [{ type: String, required: true }],
  lastUpdate: { type: String, required: true },
  lastUpdateBy: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  lastUpdateOn: { type: String, required: true },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", TaskSchema);
