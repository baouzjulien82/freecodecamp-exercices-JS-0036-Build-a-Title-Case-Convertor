// first version 

const titleCase = (string) => {
  let separArray = string.split(" ");
  let firstUpper = [];
  let newString = "";
  separArray.forEach(word => {
    firstUpper.push(word[0].toUpperCase() + word.slice(1).toLowerCase() + " ");
    newString = firstUpper.join("").trim()
  });
  return newString;
};

console.log(titleCase("I'm a little tea pot"));

// Improved version

const titleCase = (string) => {
  return string
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log(titleCase("I'm a little tea pot"));
