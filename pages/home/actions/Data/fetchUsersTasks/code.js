const employeeId = {{ui.productsTable.selectedRow.data.id}};
let tasks = {{state.allTasks}}.filter((task) => task.assigned_employees.some((employee) => employee.employee_id === employeeId));

return tasks;