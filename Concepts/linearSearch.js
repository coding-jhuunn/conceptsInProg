const list = [1, 5, 2, 7, 3, 12];
console.log(list.length);
function linearSearch(params) {
  for (let index = 0; index < list.length; index++) {
    if ((params = list[index])) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch(3));

// linear search is use when you want to search particular item in a list or an array of items
//There is no doubt that linear search is simple. But because it compares each element one by one, it is time consuming and therefore not very efficient. If we have to find a number from, say, 1,000,000 numbers and that number is at the last position, a linear search technique would become quite tedious.
