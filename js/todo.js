const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const toDos=[];
const TODOS_KEY="todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteTodo(event){
   const potato=event.target.parentElement;
   potato.remove();
}

function paintToDo(newTodo){
    const potato=document.createElement("li");
    const tomato=document.createElement("span");
    tomato.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    potato.appendChild(tomato);
    potato.appendChild(button);
    toDoList.appendChild(potato);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}