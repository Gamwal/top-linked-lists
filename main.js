import LinkedList from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("crocodile");

console.log(list);
console.log(list.getLastNode());
console.log(list.head);
console.log(list.size());
console.log(list.tail);
console.log(list.at(0).value);
console.log(list.at(1).value);
console.log(list.at(2).value);
console.log(list.at(7));
console.log(list.size());
console.log(list.tail.value);
list.pop();
console.log(list.size());
console.log(list.tail.value);
list.pop();
console.log(list.size());
console.log(list.tail.value);
console.log(list.contains("turtles"));
console.log(list.find("snake"));
console.log(list.toString());
list.insertAt("pig", 7);
console.log(list.toString());
list.removeAt(6);
console.log(list.toString());
