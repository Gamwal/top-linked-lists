import LinkedList from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("turtle");

// console.log(list);
// console.log(list.getLastNode());
// console.log(list.head);
// console.log(list.size());
// console.log(list.tail);
// console.log(list.at(0).value);
// console.log(list.at(1).value);
// console.log(list.at(2).value);
// console.log(list.at(3).value);
// console.log(list.size());
// console.log(list.tail.value);
// list.pop();
// console.log(list.size());
// console.log(list.tail.value);
// list.pop();
// console.log(list.size());
// console.log(list.tail.value);
// console.log(list.contains("turtles"));
// console.log(list.find("snake"));
list.toString();
console.log(list.insertAt("pig", 6));
list.toString();
