const employees = [
  { name: "Guillaume Sayinzonga", role: "Senior Software Engineer", department: "Engineering" },
  { name: "Pierrette Rukundo", role: "Product Designer", department: "Design" },
  { name: "Richard Minega", role: "Data Analyst", department: "Analytics" },
  { name: "Kimenyi Emmanuel", role: "Account Manager", department: "Sales" },
  { name: "Ange Biguri", role: "Recruiter", department: "People" },
  { name: "Benjamin Ndamukunda", role: "Senior Software Engineer", department: "Engineering" },
  { name: "Dieudonne Bazimya", role: "Social Media Specialist", department: "Marketing" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold">Employee Manager</h1>
      <p className="mt-1 text-sm">Built by Benjamin Ndamukunda</p>

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
