const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const list=document.querySelector("#list");

addBtn.addEventListener("click", function(){
    const task = input.value;
    if(task === ""){
    return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    list.style.display="block";
    todoList.style.listStyle="disc";
    todoList.appendChild(li);
    input.value = "";
});