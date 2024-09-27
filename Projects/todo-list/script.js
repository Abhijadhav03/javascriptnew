const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";  

    saveTaskListeners();
}

function saveTaskListeners() {
   
    const listItems = document.querySelectorAll('#list-container li');
    listItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('checked');
        });
    });

    const deleteButtons = document.querySelectorAll('#list-container li span');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.parentElement.remove();
        });
    });
}

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
