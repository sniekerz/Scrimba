// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.tags);

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  isCastle: true,
  price: 459,
  isAvailable: true,
  bedrooms: 3,
  bathrooms: 2,
  features: ["pool", "gym", "kitchen", "wifi", "parking"],
  location: "Enschede",
};

console.log(castle.features);
console.log(castle.location);
