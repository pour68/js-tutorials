// event bubbling (event executed from child to parent hierarchy)
/* how to prevent event bubbling */
// event = event | window.event;
// if (event.stopPropagation) {
//     // new browsers
//     event.stopPropagation();
// } else {
//     // old browsers
//     event.cancelBubble = true;
// }

/* event capturing */
// Element.addEventListener("click", clickHandler, true);
// if true: event capturing happen: first parent till children.
// if false: event bubbling happen: from children till parent.

/* how to disabled event capturing */
// event.stopPropagation();

/* active both at the same time */
// Element.addEventListener("click", clickHandler, true);
// Element.addEventListener("click", clickHandler, false);

// mouse click
// Element.addEventListener("click", event => {
//     if (event.which) {
//         // event.which (1: left click - 2: middle click - 3: right click)
//     } else {
//         // event.button (1: left click - 4: middle click - 2: right click)
//     }
// });

// let daySpans = document.querySelectorAll("#days span");
// let currentDate = new Date();
// let daysOfWeek = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// let dayOfWeek = currentDate.getDay();

// daySpans.forEach((daySpan) => {
//   let dayName = daySpan.innerText;

//   if (dayName === daysOfWeek[dayOfWeek]) {
//     daySpan.classList.add("active");
//   }
// });

const bgColorSelect = document.querySelector("#bgColor");

bgColorSelect.addEventListener("change", (event) => {
  let selectedColor = event.target.value;

  document.cookie = `theme=${selectedColor}; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/`;
  document.body.bgColor = selectedColor;
});

window.addEventListener("load", () => {
  let cookie = document.cookie;
  if (cookie === null || cookie === "") {
    document.body.style.backgroundColor = "white";
  } else {
    let colorStoredInCookie = cookie.split("=")[1];

    bgColorSelect.value = colorStoredInCookie;
    document.body.bgColor = colorStoredInCookie;
  }
});
