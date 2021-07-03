let movie = {
  title: "Titanic",
  productionYear: new Date("November 18, 1997"),
  genres: ["Romance", "Drama"],
  directors: ["James Cameron"],
  summary:
    "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
  actors: ["Leonardo DiCaprio", "Kate Winslet"],
  producers: [],
  language: "",
  set lang(lang) {
    this.language = lang;
  },
  get lang() {
    return this.language;
  },
};

movie.lang = "en";

// by the help of assign method we can assign new properties to object
Object.assign(movie, { isbn: "9780670866298" });

// Adding or changing an object property
// Pattern: Object.defineProperty(object, property, descriptor)
Object.defineProperty(movie, "producers", {
  set: (producers) => (this.producers = producers),
  get: () => this.producers,
});

movie.producers = ["James Cameron", "Jon Landau"];

// Adding or changing many object properties
// Pattern: Object.defineProperties(object, descriptors)
Object.defineProperties(movie, {
  language: {
    value: "fa",
    configurable: false,
    writable: false,
    enumerable: false,
  },
});

// Returns enumerable key/value pairs as an array
// Pattern: Object.entries(object);
Object.entries(movie);

// Prevents any changes to object's properties
// Pattern: Object.freeze(object);
Object.freeze(movie);

// Returns true if object is frozen
// Pattern: Object.isFrozen(object)
Object.isFrozen(movie);

// Returns true if properties can be added to an object
// Pattern: Object.isExtensible(object);
Object.isExtensible(movie);

// Make configuration false in object descriptors
// Pattern: Object.seal(object)
Object.seal(movie);

// Returns true if object is sealed
// Pattern: Object.isSealed(object)
Object.isSealed(movie);

// Object.setPrototypeOf();

// Accessing the prototype
// Pattern: Object.getPrototypeOf(object)
Object.getPrototypeOf(movie);

// Accessing Properties
// Pattern: Object.getOwnPropertyDescriptor(object, property);
Object.getOwnPropertyDescriptor(movie);
Object.getOwnPropertyDescriptors(movie);

// Returns all properties as an array
// Pattern: Object.getOwnPropertyNames(object);
Object.getOwnPropertyNames(movie);

Object.getOwnPropertySymbols(movie);

// Prevents adding properties to an object
// Pattern: Object.preventExtensions(object);
Object.preventExtensions(movie);

// Returns enumerable values as an array
Object.values(movie);

// Returns enumerable keys as an array
// Pattern: Object.keys(object)
Object.keys(movie);
