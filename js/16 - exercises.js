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
