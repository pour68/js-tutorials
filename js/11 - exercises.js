let rows = new Array(3);

for (let i = 0; i < 3; i++) {
  rows[i] = new Array(3);
}

let initial = 1;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    rows[i][j] = initial;
    initial++;
  }
}

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    console.log(`${rows[i][j]}\n`);
  }
}
