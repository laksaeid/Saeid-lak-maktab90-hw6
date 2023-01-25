const arr = [
  { name: "mousa", age: 30 },
  { name: "mohtashami", age: 65 },
  { name: "saeid", age: 20 },
  { name: "mmd", age: 47 },
  { name: "asghar", age: 25 }
];
function sortByAge(array) {
  const sorted = array.sort((a, b) => a.age - b.age);
  sorted.map(element => {
    console.log(`${element.name} : ${element.age}`);
  })
}
sortByAge(arr);

