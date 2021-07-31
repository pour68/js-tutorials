// const demoDiv = document.getElementById("demo");

// const demoDiv = document.querySelector("#demo");

// // demoDiv.innerText = "Amin Ganji";
// demoDiv.innerHTML = "<p>AminGanji</p><span>Hi</span>";
// demoDiv.style.color = "red";
// demoDiv.style.fontSize = "2.5rem";
// demoDiv.style.backgroundColor = "#000";
// demoDiv.style.transform = "translate(15px, 100px)";

// const listItemLi = document.getElementsByClassName("list-item");

// const listItemLi = document.querySelectorAll(".list-item");

// listItemLi[1].style.color = "red";

// const listItemLi = document.getElementsByTagName("li");

// const listItemLi = document.querySelectorAll("li");

// console.log(listItemLi);

// all props and methods of DOM
// console.dir(document);

// document.URL
// document.domain
// document.title
// document.doctype
// document.all
// document.head
// document.body
// document.forms
// document.links
// document.images

// parentNode
// parentElement
// childNodes: white space + elements
// children
// firstChild
// firstElementChild
// lastChild
// lastElementChild
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling

let list = document.querySelector(".list");
// list.parentElement.style.color = "blue";

// createElement
// setAttribute
// createTextNode
// appendChild
// classList

// let li = document.createElement("li");
// li.classList.add("list-item");
// let ariaValue = document.createTextNode("Aria");
// li.append(ariaValue);

// let li1 = document.createElement("li");
// li1.classList.add("list-item");
// li1.innerText = "Amirhossein";

// let li2 = document.createElement("li");
// li2.classList.add("list-item");
// li2.innerText = "Amin";

// list.appendChild(li);
// list.appendChild(li1);
// list.appendChild(li2);

// list.innerHTML = `
// <li class="list-item">Aria</li>
//             <li class="list-item">Amirhossein</li>
//             <li class="list-item">Amin</li>
// `;

// events

// element.addEventListener(<event>, <function>)
// event object
// event.target
// event.type for example click - dblclick - mouseup - mousedown - mouseleave - mouseenter - mouseover - mouseout - mousemove - keydown - keyup - keypress - focus - blur - input - cut - paste - change - submit
// event.preventDefault()
// event.clientX position on x-axis
// event.clientY position on y-axis
// event.offsetX start from element left edge
// event.offsetY start from element top edge
// event.altKey - event.ctrlKey - event.shiftKey

// const btn = document.querySelector("#btn");
// const containerDiv = document.querySelector("#container");

// btn.addEventListener("mousedown", () => {
//   document.body.style.background = "orange";
// });

// containerDiv.addEventListener("mouseenter", (event) => {
//   const { offsetX, offsetY } = event;

//   console.log(offsetX, offsetY);
// });

// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
// });

// document.addEventListener("mousemove", (event) => {
//   console.log(`x: ${event.clientX} - y: ${event.clientY}`);
// });

const userNameInput = document.querySelector("#username");

// userNameInput.addEventListener("keypress", (event) => {
//   let asciiCode = event.keyCode || event.which;
// });
