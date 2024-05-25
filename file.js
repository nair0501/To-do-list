const inputTask = document.getElementById("input-task");
const textareaDesc = document.getElementById("task-descrition");
const table = document.getElementById("table");

function addTask() {
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);
  const cell1 = row.insertCell(0);
  cell1.innerHTML = rowCount;

  const cell2 = row.insertCell(1);
  const taskText = inputTask.value.trim();
  if (taskText !== "") {
    const td = document.createElement("td");
    td.textContent = taskText;
    cell2.appendChild(td);
    inputTask.value = "";
  } else {
    alert("please provide task input");
  }

  console.log('test')

  const cell3 = row.insertCell(2);
  const taskDesc = textareaDesc.value.trim();
  if (taskDesc !== "") {
    const td = document.createElement("td");
    td.textContent = taskDesc;
    cell3.appendChild(td);
    textareaDesc.value = "";

    const cell4 = row.insertCell(3);
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "secondary2-button button";
    doneButton.addEventListener("click", done);
    cell4.appendChild(doneButton);

    const cell5 = row.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "secondary-button button";
    deleteButton.addEventListener("click", deleteTask);
    cell5.appendChild(deleteButton);
  } else {
    alert("please provide description input");
  }
}

function removeRow(btnName) {
  try {
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
      var row = table.rows[i];
      var rowObj = row.cells[0].childNodes[0];
      if (rowObj.name == btnName) {
        table.deleteRow(i);
        rowCount--;
      }
    }
  } catch (e) {
    alert(e);
  }
}

function done() {
  document.querySelectorAll(".secondary2-button").forEach((item) => {
    item.parentNode.parentNode.style = "text-decoration: line-through";
  });
}

function handleSubmit(event) {
  event.preventDefault();
}

function deleteTask(event) {
   
 }
 

   
 
