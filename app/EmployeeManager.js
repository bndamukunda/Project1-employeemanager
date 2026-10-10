"use client";

import { useState } from "react";
import { createEmployee } from "./actions";

export default function EmployeeManager({ startingEmployees }) {
  const [employees, setEmployees] = useState(startingEmployees);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold">Employee Manager</h1>
      <p className="mt-1 text-sm">Built by Benjamin Ndamukunda</p>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <input
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Role"
          className="border p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          placeholder="Department"
          className="border p-2"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button
          onClick={async() => {
            if (name === "") { return; }
            if (role === "") { return; }
            if (department === "") { return; }

            const saved = await createEmployee(name, role, department);

            setEmployees([...employees, saved]);
            setName("");
            setRole("");
            setDepartment("");
          }}
          className="border p-2 bg-[darkblue] text-white"
        >
          Add Employee
        </button>
      </div>

      <table className="w-full mt-6 border-collapse">
        <thead>
          <tr className="bg-[darkblue] text-white text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id} className="border-b border-zinc-200">
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.role}</td>
              <td className="p-3">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}