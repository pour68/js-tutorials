let grades = [10, 12.5, 14, 19.75, 20];

// iterate through each grade
grades.forEach((grade) => console.log(grade));

// sum of grades
let sum = grades.reduce((total, grade) => total + grade, 0);

// avg of grades
let avg = sum / grades.length;

// -------------------------------

let names = ["Pouria Nayeb", "Hamed Abdeli", "Maryam Eidi"];

// sort asc
names.sort();

// reverse the order
names.reverse();

// every item should satisfy
let isEveryNameString = names.every((name) => typeof name === "string");

// enough if one item satisfy condition
let isAnyNameToStartWithP = names.some((name) => name.startsWith("P"));

let isMaryamEidiIncluded = names.includes("Maryam Eidi");

// concat one array to others
names.concat(["Asghar Farhadi"]);

let joinNamesByHyphen = names.join("-");

let indexOfHamedAbdeli = names.indexOf("Hamed Abdeli");

// Pattern: Array.splice(start, remove, value);
let subArray = names.splice(1, 1, "Maryam Eidivandi");

// -------------------------------

let books = [
  {
    id: 1,
    title: "JavaScript from zero to hero",
    author: "Pouria Nayeb",
    rate: 4.75,
  },
  { id: 2, title: "C# master course", author: "Pouria Nayeb", rate: 4 },
  { id: 3, title: "Sass for UI designers", author: "Pouria Nayeb", rate: 3.75 },
  { id: 4, title: "Chemical knowledge", author: "Hamed Abdeli", rate: 3.25 },
  {
    id: 5,
    title: "Selling tech.",
    author: "Maryam Eidi.",
    rate: 4.75,
  },
];

// add book to end
books.push({
  id: 5,
  title: "HTML and CSS ultimate course",
  author: "Pouria Nayeb",
  rate: 3.75,
});

// remove book from end
books.pop();

// add book to start
books.unshift({
  id: 6,
  title: "React ultimate course",
  author: "Pouria Nayeb",
  rate: 5,
});

// remove book from start
books.shift();

// Pattern: splice(start, deleteCounts, replaceValues)
books.splice();

let highRatedBooks = books.filter((book) => book.rate > 4);
let bookTitles = books.map((book) => book.title);
