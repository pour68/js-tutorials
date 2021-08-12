const todosUl = document.querySelector(".todos");

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
    });
}

const displayData = (todos) => {
  let container = "";

  todos.forEach((todo) => {
    container += `<li>
     ${todo.title} - ${todo.body}
    </li>`;
  });

  todosUl.innerHTML = container;
};

getData("https://jsonplaceholder.typicode.com/posts");
