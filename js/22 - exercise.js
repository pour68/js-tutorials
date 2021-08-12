const todosUl = document.querySelector(".todos");
const cars = [
  { id: 1, brand: "benz", releaseDate: new Date(2021), model: "maybach 580s" },
  { id: 2, brand: "bmw", releaseDate: new Date(2020), model: "730li" },
];

function displayCars() {
  setTimeout(() => {
    let container = "";
    cars.forEach((car) => {
      container += `
        <li>${car.model} - ${car.brand}</li>
        `;
    });

    todosUl.innerHTML = container;
  }, 1000);
}

async function addCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cars.push({
        id: 3,
        brand: "bmw",
        releaseDate: new Date(2005),
        model: "x5",
      });

      let isFailed = false;

      if (!isFailed) {
        resolve();
      } else {
        reject("object not create");
      }
    }, 2500);
  });
}

addCar()
  .then(displayCars)
  .catch((err) => console.log(err));
