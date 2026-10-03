"use client";

import { useState } from "react";

const startingEmployees = [
  { name: "Guillaume Sayinzonga", role: "Senior Software Engineer", department: "Engineering" },
  { name: "Pierrette Rukundo", role: "Product Designer", department: "Design" },
  { name: "Richard Minega", role: "Data Analyst", department: "Analytics" },
  { name: "Kimenyi Emmanuel", role: "Account Manager", department: "Sales" },
  { name: "Ange Biguri", role: "Recruiter", department: "People" },
  { name: "Benjamin Ndamukunda", role: "Senior Software Engineer", department: "Engineering" },
  { name: "Dieudonne Bazimya", role: "Social Media Specialist", department: "Marketing" },
];

export default function Home() {
  const [employees, setEmployees] = useState(startingEmployees);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold">Employee Manager</h1>
      <p className="mt-1 text-sm">Built by Benjamin Ndamukunda</p>
      <div className="mt-6 flex gap-2">
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
          onClick={() => {
            if (name === "") { return; }
            if (role === "") { return; }
            if (department === "") { return; }
            {
              setEmployees([...employees, {
                name: name, role: role,
                department: department
              }]);
              setName("");
              setRole("");
              setDepartment("");
            }
          }}
          className="bg-[darkblue] text-white"
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
            <tr key={employee.name} className="border-b border-zinc-200">
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
