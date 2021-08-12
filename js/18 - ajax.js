// create an object XMLHttpRequest
// use XMLHttpRequest's object onreadystatechange prop
// check this.readyState, this.status, this.getAllResponseHeaders() and this.getResponseHeader("Last-Modified");
// use responseText to get data from server
// use send(method, url, async, username, password) and send()

const xHttp = new XMLHttpRequest();
const todosUl = document.querySelector(".todos");

xHttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const todos = JSON.parse(this.responseText);

    let container = "";
    todos.forEach((todo) => {
      container += `<li>
       ${todo.title} - ${todo.body}
      </li>`;
    });

    todosUl.innerHTML = container;
  }
};

xHttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xHttp.send();

// const todosUl = document.querySelector(".todos");

// function getData(url) {
//   const xHttp = new XMLHttpRequest();

//   xHttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const todos = JSON.parse(this.responseText);

//       displayData(todos);
//     }
//   };

//   xHttp.open("GET", url);
//   xHttp.send();
// }

// const displayData = (todos) => {
//   let container = "";

//   todos.forEach((todo) => {
//     container += `<li>
//      ${todo.title} - ${todo.body}
//     </li>`;
//   });

//   todosUl.innerHTML = container;
// };

// getData("https://jsonplaceholder.typicode.com/posts");
