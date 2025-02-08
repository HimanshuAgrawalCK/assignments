var tasks = [];
if (!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function main() {
    var addNewTask = document.getElementById('addTask');
    if (addNewTask) {
        // console.log('dsa'    );
        addNewTask.addEventListener('click', addTask);
    }
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    var clearAll = document.getElementById('clearAll');
    if(clearAll)
    {
        clearAll.addEventListener('click', clearAllTasks);
    }
    loadTask();
}

function clearAllTasks()
{
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = [];
    localStorage.setItem("tasks",JSON.stringify(tasks));
    location.reload();

}


function addTask() {
    var taskText = document.getElementById('newTask').value;
    if (taskText.trim() === '') {
        alert("Task cannot be empty");
        return;
    }

    var task = JSON.parse(localStorage.getItem('tasks'));
    task.push({ "text": taskText, "isDone": false });
    localStorage.setItem('tasks', JSON.stringify(task));
    appendTaskToList(taskText, false);
    document.getElementById('newTask').value = "";

}


function appendTaskToList(taskText, isDone) {
    var list = document.getElementById('list');

    var li = document.createElement("li");
    li.textContent = taskText;

    if (isDone) {
        li.style.textDecoration = 'line-through';
    }

    var doneButton = document.createElement('button');
    doneButton.textContent = isDone ? 'REMOVE' : "DONE";
    doneButton.setAttribute("id","done")
    doneButton.addEventListener('click', function () {
        if (!isDone) {
            // li.style.textDecoration = 'line-through';
            location.reload();
            doneButton.textContent = "REMOVE";
            updateTaskStatus(taskText, true);
        }
        else {
            removeTask(taskText, li);
        }
    });

    li.appendChild(doneButton);
    list.appendChild(li);
}

function updateTaskStatus(taskText, isDone) {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.map(task => task.text === taskText ? { text: task.text, isDone: isDone } : task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(taskText, listItem)
{
    var tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks = tasks.filter(task => task.text !== taskText);   
    localStorage.setItem("tasks",JSON.stringify(tasks));

    listItem.remove();
}



function loadTask(task = JSON.parse(localStorage.getItem("tasks"))) {
    var tasks = task;
    console.log(tasks)
    var list = document.getElementById('list');
    list.innerHTML = "";
    tasks.forEach(function (task) {
        appendTaskToList(task.text,task.isDone);
    });
}

function dropdown(){
    var status = document.getElementById('filter');
    // var tasks = JSON.parse()
    status.addEventListener('change',(event)=>{
        var selected = event.target.value;
        // console.log(selected);
        if(selected=="Completed"){
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks = tasks.filter(complete)
            console.log(tasks)
            var list = document.getElementById("list");
            loadTask(tasks);
        }
        if(selected=="Incompleted"){
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks = tasks.filter(inComplete)
            console.log(tasks)
            var list = document.getElementById("list");
            loadTask(tasks);
        }
        if(selected=="All"){
            loadTask();
        }
    });
}


function inComplete(item){
    if (item.isDone==false){
        return true;
    }
    return false;
}

function complete(item){
    if (item.isDone==true){
        return true;
    }
    return false;
}

main();
dropdown()