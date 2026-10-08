import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    role: String,
    department: String,
});

export default mongoose.models.Employee || 
mongoose.model("Employee", employeeSchema);