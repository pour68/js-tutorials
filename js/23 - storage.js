// const cars = [
//   { id: 1, brand: "benz", releaseDate: new Date(2021), model: "maybach 580s" },
//   { id: 2, brand: "bmw", releaseDate: new Date(2020), model: "730li" },
// ];

// localStorage.setItem("cars", JSON.stringify(cars));
// sessionStorage.setItem("cars", JSON.stringify(cars));

// console.log(localStorage.getItem("cars"));

// localStorage.removeItem("cars");

// localStorage.clear();

//  -----------------------------

let blocks = [
  { hash: "146545454545454", prevHash: null },
  { hash: "146545454545455", prevHash: "146545454545454" },
  { hash: "146545454545456", prevHash: "146545454545455" },
  { hash: "146545454545457", prevHash: "146545454545456" },
];

function isBlockValid() {
  for (let i = 1; i < blocks.length; i++) {
    let currentBlock = blocks[i];
    let prevBlock = blocks[i - 1];

    if (currentBlock.hash !== prevBlock.prevHash) {
      return false;
    }
  }

  return true;
}
