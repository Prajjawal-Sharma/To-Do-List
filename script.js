const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
    if (input.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        const li = e.target;
        li.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        if (confirm("Do you want to delete this task?")) {
            e.target.parentElement.remove();
            saveData();
        }
    }

}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();


