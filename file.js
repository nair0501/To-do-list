const inputTask = document.getElementById("input-task");
const textareaDesc = document.getElementById("task-descrition");
const table = document.getElementById("table");

function addRowNumber(row, rowCount) {
  const cell1 = row.insertCell();
  cell1.innerHTML = rowCount;
}

function addTaskTitle(row) {
  const cell2 = row.insertCell();
  const taskText = inputTask.value.trim();
  if (taskText !== "") {
    const td = document.createElement("td");
    td.textContent = taskText;
    cell2.appendChild(td);
    inputTask.value = "";
  } else {
    alert("please provide task input");
  }
}

function addTaskDescription(row) {
  const cell3 = row.insertCell();
  const taskDesc = textareaDesc.value.trim();
  if (taskDesc !== "") {
    const td = document.createElement("td");
    td.textContent = taskDesc;
    cell3.appendChild(td);
    textareaDesc.value = "";
  } else {
    alert("please provide description input");
  }
}

function createRowButtons(row) {
  const cell4 = row.insertCell();
  const doneButton = document.createElement("button");

  doneButton.textContent = "Done";
  doneButton.className = "secondary2-button button";
  doneButton.addEventListener("click", () => done(row));
  cell4.appendChild(doneButton);

  const cell5 = row.insertCell();
  const deleteButton = document.createElement("button");
  
  deleteButton.textContent = "Delete";
  deleteButton.className = "secondary-button button";
  deleteButton.addEventListener("click", () => removeRow(row.rowIndex));
  cell5.appendChild(deleteButton);
}

function addTask(event) {
  event.preventDefault();

  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  addRowNumber(row, rowCount);
  addTaskTitle(row);
  addTaskDescription(row);
  createRowButtons(row);

  resetInputValues(event)
}


function removeRow(index) {
  table.deleteRow(index);
}

function done(row) {
  row.style = "text-decoration: line-through";
}


function deleteInputValue(event, elemId) {
  event.preventDefault();

  const element = document.getElementById(elemId);

  element.value = '';
}

function resetInputValues(event) {
  deleteInputValue(event, 'input-task');
  deleteInputValue(event, 'task-descrition');
} 



