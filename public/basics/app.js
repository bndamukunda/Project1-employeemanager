const button = document.querySelector("#add-button");
const tableBody = document.querySelector("tbody");
const nameInput = document.querySelector("#name-input");
const roleInput = document.querySelector("#role-input");
const departmentInput = document.querySelector("#department-input");

button.addEventListener("click", function () {
  const newRow = "<tr><td>" + nameInput.value + "</td><td>" + roleInput.value + "</td><td>" + departmentInput.value + "</td></tr>";
  tableBody.innerHTML = tableBody.innerHTML + newRow;
});
