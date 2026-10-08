"use server";

import connectToDatabase from "@/lib/db";
import Employee from "@/models/Employee";

export async function createEmployee(name, role, department) {
    await connectToDatabase();
    
    const employee = await Employee.create({ name, role, department 
    });

    return {
        _id: employee._id.toString(),
        name: employee.name,
        role: employee.role,
        department: employee.department,
    };
}