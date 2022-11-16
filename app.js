const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const todoList = document.querySelector(".todo-list")
taskInput.focus()

todoList.addEventListener("click", (e) =>{
    if (e.target.nodeName === "BUTTON"){
        const btn = e.target
        btn.parentElement.remove()
    }
})

taskInput.addEventListener("keydown", (e) => {
    if (e.code === 'Enter'){
        addtask()
    }
})

addBtn.addEventListener("click", addtask) 

function addtask(){
    const task = taskInput.value.trim()

    if (task !== "" ){
        const result = `<li class="todo-item">
        <span class="item">${task}</span>
        <button class="closeBtn">X</button>
      </li>`

      todoList.insertAdjacentHTML("afterbegin", result)
      taskInput.value = " "
      taskInput.focus()
      
    }
}
