const taskcontainer = document.querySelector('#task-container');
const inputtask = document.querySelector('#input-task');
const addtask = document.querySelector('#add-task');

addtask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputtask.value;
    task.appendChild(li);

    let checkbutton = document.createElement('button');
    checkbutton.innerHTML = '<i class="fa-solid fa-check" ></i>';
    checkbutton.classList.add('check');
    task.appendChild(checkbutton);

    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deletebtn.classList.add('delete');
    task.appendChild(deletebtn);

    if(inputtask.value === ''){
        alert('Write the task u gonna do u fucking idiot😑');
    }
    else{
        taskcontainer.appendChild(task);
    }
    inputtask.value = "";

    checkbutton.addEventListener('click',function(){
        checkbutton.parentElement.style.textDecoration = "line-through"
    });

    deletebtn.addEventListener('click', function(e){
        let target = e.target; 
        target.parentElement.parentElement.remove();
    });
});