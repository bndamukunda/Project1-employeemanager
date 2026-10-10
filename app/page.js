import connectToDatabase from "@/lib/db";
import Employee from "@/models/Employee";
import EmployeeManager from "./EmployeeManager";

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectToDatabase();
  const employees = await Employee.find({}).lean();

  const plainEmployees = employees.map((employee) => ({
    _id: employee._id.toString(),
    name: employee.name,
    role: employee.role,
    department: employee.department,
  }));

  return <EmployeeManager startingEmployees={plainEmployees} />;
}
