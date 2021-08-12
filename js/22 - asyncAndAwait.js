const todosUl = document.querySelector(".todos");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayData(data);
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
