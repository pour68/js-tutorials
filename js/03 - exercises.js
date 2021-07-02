// exercise 01 (access based-on role)
let role = "admin";
switch (role) {
  case "admin":
    console.log("full access");
    break;
  case "teacher":
    console.log("his/her courses");
    break;
  case "student":
    console.log("readonly");
    break;
  default:
    console.log("redirect to login page.");
    break;
}