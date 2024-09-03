let input = document.querySelector(".input");
let submit = document.querySelector(".add2");
let tasksDiv = document.querySelector(".tasks");
let streak = document.querySelector(".streak");

let arrayOfTasks = [];


let quotes = [
    "Small daily improvements over time lead to stunning results.",
    "Don't demand perfection, but insist on continuous improvement.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Continuous improvement is better than delayed perfection.",
    "The journey of a thousand miles begins with one step.",
    "The only way to do great work is to love what you do.",
    "The road to success is always under construction.",
    "If you're not growing, you're dying.",
    "There is always space for improvement, no matter how long you've been in the business.",
    "In the pursuit of knowledge, every day something is added. In the practice of the Way, every day something is dropped.",
    "Strive for progress, not perfection.",
    "The best way to predict the future is to create it.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Don't watch the clock; do what it does. Keep going.",
    "Quality is never an accident. It is always the result of intelligent effort.",
    "Do not be embarrassed by your failures, learn from them and start again.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "You don't have to be great to start, but you have to start to be great.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The secret of getting ahead is getting started.",
    "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success seems to be connected with action. Successful people keep moving.",
    "Improvement begins with I.",
    "The only person you are destined to become is the person you decide to be."
  ];
  
  let namesOfQuotessSayers = [
    "- Robin Sharma",
    "- Torley",
    "- Robert Collier",
    "- Mark Twain",
    "- Lao Tzu",
    "- Steve Jobs",
    "- Lily Tomlin",
    "- Tony Robbins",
    "- Tony Robbins",
    "- Lao Tzu",
    "- Unknown",
    "- Peter Drucker",
    "- Aristotle",
    "- Sam Levenson",
    "- John Ruskin",
    "- Richard Branson",
    "- Albert Schweitzer",
    "- Zig Ziglar",
    "- Franklin D. Roosevelt",
    "- Mark Twain",
    "- Winston Churchill",
    "- Confucius",
    "- Conrad Hilton",
    "- John Wooden",
    "- Ralph Waldo Emerson"
  ];
  
let num = (Math.floor(Math.random() * quotes.length));
console.log(num);
let q = document.querySelector("q");
let nameofqs = document.querySelector(".name");
q.innerHTML = quotes[num];
nameofqs.innerHTML = namesOfQuotessSayers[num];


if (localStorage.getItem("tasks2")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks2"));
};

getDataFromLocalStorage();

submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
    };
};

tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
});

let total = document.querySelector(".input2");


function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        dateD: new Date().getDate(),
        calc: Math.round(parseInt(input.value) * 100 / total.value),
        ttl: document.querySelector(".input2").value,
    };
    arrayOfTasks.push(task);
    addElementsToPageFrom(arrayOfTasks);
    addDataToLocalStorageFrom(arrayOfTasks);
    if (parseInt(task.calc) >= 100) {
        document.querySelector(".streak2").style.display = "none";
        streak.innerHTML++;
    } else {
        document.querySelector(".streak2").style.display = "none";
        streak.innerHTML = 0;
    }
    
window.localStorage.setItem("stre2", streak.innerHTML);
window.localStorage.setItem("tt2", total.value);
window.localStorage.setItem("dn2", "none");
}
streak.innerHTML = window.localStorage.getItem("stre2");
total.value = window.localStorage.getItem("tt2");
document.querySelector(".streak2").style.display = window.localStorage.getItem("dn2");


function addElementsToPageFrom(arrayOfTasks) {
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode("Day: " + task.dateD));
        let span2 = document.createElement("span");
        span2.className = "ti";
        span2.appendChild(document.createTextNode("Mark: " + task.title + '/' + task.ttl));
        div.appendChild(span2);
        div.appendChild(document.createTextNode(task.calc + '%'));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Del"));
        div.appendChild(span);
        tasksDiv.appendChild(div);
    });
}

    function addDataToLocalStorageFrom(arrayOfTasks) {
        window.localStorage.setItem("tasks2", JSON.stringify(arrayOfTasks));
    }

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks2");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);                
}

document.onkeyup = function(e) {
    if (e.key === "Enter") {
        if (input.value !== "") {
            addTaskToArray(input.value);
            input.value = "";
        };
    }
};