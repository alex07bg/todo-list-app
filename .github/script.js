document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    document.getElementById('todo-list').appendChild(li);
    input.value = '';  // Clear the input field
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
          .then(() => console.log("Service Worker registered!"))
          .catch((error) => console.log("Service Worker registration failed:", error));
      }
}