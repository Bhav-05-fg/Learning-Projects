const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const input = document.querySelector('.input-todo')
const todoList = document.querySelector('.js-task-todo')
const addBtn = document.querySelector('.add-todo')
const name = document.querySelector('.todo-name')
listRenderer()

function listRenderer(){
  
  let todoHTML = '';
  tasks.forEach((task,index)=>{
    todoHTML+=
    `
    <div class="task-todo">
    <p class="todo-name" > ${task}</p>
    <button class="rmv-todo"
    data-index="${index}">Delete</button>
    </div>
    `;
    
  })
  todoList.innerHTML = todoHTML
  
  // Remove The Task
  const rmvBtn = document.querySelectorAll('.rmv-todo')
  rmvBtn.forEach(button => {
    button.addEventListener('click', function () {
      const index = button.getAttribute('data-index');
      tasks.splice(index,1);
      listRenderer();
      localStorage.setItem('tasks',JSON.stringify(tasks))
    });
  });
}
  // Adds The Task
addBtn.addEventListener('click',()=>{
  if(input.value !== '' ){
    tasks.push(input.value)
    console.log(tasks);
  }
  localStorage.setItem('tasks',JSON.stringify(tasks))
  listRenderer()
})



