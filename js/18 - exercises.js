// https://jsonplaceholder.typicode.com/todos
const todosUl = document.querySelector(".todos");

const loadData = () => {
  const xHttp = new XMLHttpRequest();

  xHttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const todos = JSON.parse(this.responseText);

      displayData(todos, todosUl);
    }
  };

  xHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xHttp.send();
};

const displayData = (todos, targetElement) => {
  let container = "";

  todos.forEach((todo) => {
    container += `<li>
      ${todo.title}
      </li>`;
  });

  targetElement.innerHTML = container;
};

loadData();
