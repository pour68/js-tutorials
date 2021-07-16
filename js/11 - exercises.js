// matrix
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

// exercise 01:

// step 1: create a collection of songs
const songs = [
  {
    id: 1,
    title: "blinding lights",
    artist: "the weekend",
    length: "03:10:25",
    url: "",
    releaseDate: new Date(2019, 10, 11),
  },
  {
    id: 2,
    title: "red blood",
    artist: "the weekend",
    length: "03:10:25",
    url: "",
    releaseDate: new Date(2019, 10, 11),
  },
  {
    id: 3,
    title: "castle rock",
    artist: "the weekend",
    length: "03:10:25",
    url: "",
    releaseDate: new Date(2019, 10, 11),
  },
];

// step 2: sorting songs based on title
songs.sort((music1, music2) => music1.title.localeCompare(music2.title));
