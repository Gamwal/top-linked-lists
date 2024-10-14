# LinkedList Implementation in JavaScript

This repository contains a JavaScript implementation of a **Linked List** data structure. It provides a number of methods for manipulating and interacting with the linked list, such as adding, removing, and retrieving elements, as well as other utility functions. This implementation uses basic **Node** and **LinkedList** classes to represent and manage the list.

## Features

- **Append**: Add a new element at the end of the linked list.
- **Prepend**: Add a new element at the beginning of the linked list.
- **Pop**: Remove the last element from the linked list.
- **Size**: Get the total number of nodes in the linked list.
- **Find**: Locate the index of a node with a specific value.
- **Contains**: Check if the linked list contains a specific value.
- **InsertAt**: Insert a new element at a specified index.
- **RemoveAt**: Remove an element from a specified index.
- **ToString**: Display the linked list as a string representation.
- **Head**: Retrieve the first node of the linked list.
- **Tail**: Retrieve the last node of the linked list.

## Class and Method Breakdown

### `Node`

A basic building block of the linked list, representing an individual element or "node" in the list. Each `Node` contains:

- `value`: The data stored in the node.
- `nextNode`: A reference to the next node in the list.

```javascript
class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
```

### `LinkedList`

The main class that manages the linked list. It provides several methods to interact with the linked list:

#### Constructor

```javascript
constructor() {
  this.root = new Node(null);
}
```

Initializes the linked list with a root node containing `null`.

#### `size()`

Returns the total number of nodes in the linked list.

#### `append(value)`

Adds a new node with the specified value to the end of the list.

#### `prepend(value)`

Adds a new node with the specified value to the beginning of the list.

#### `pop()`

Removes the last node from the linked list.

#### `contains(value)`

Checks whether the linked list contains a node with the specified value.

#### `find(value)`

Finds and returns the index of the node with the specified value.

#### `toString()`

Returns a string representation of the linked list, with each node's value connected by arrows (`->`).

#### `insertAt(value, index)`

Inserts a new node at a specific index in the linked list.

#### `removeAt(index)`

Removes the node at a specific index from the linked list.

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Gamwal/top-linked-lists.git
   cd linkedlist-js
   ```

2. **Initialize and Test:**

   You can create a new linked list and interact with it:

   ```javascript
   const list = new LinkedList();
   list.append("dog");
   list.append("cat");
   list.append("parrot");
   list.append("hamster");
   list.append("snake");
   list.append("turtle");
   list.append("crocodile");
   console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> ( crocodile ) -> null
   ```

3. **Methods Overview:**

   - Use `list.append(value)` to add a value to the end.
   - Use `list.prepend(value)` to add a value to the beginning.
   - Use `list.pop()` to remove the last element.
   - Use `list.contains(value)` to check if the list contains a specific value.
   - Use `list.find(value)` to find the index of a value.
   - Use `list.toString()` to print the entire linked list.

## Example

```javascript
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);

console.log(linkedList.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.find(2)); // 2
console.log(linkedList.contains(3)); // false

linkedList.pop();
console.log(linkedList.toString()); // ( 0 ) -> ( 1 ) -> null

linkedList.insertAt(5, 1);
console.log(linkedList.toString()); // ( 0 ) -> ( 5 ) -> ( 1 ) -> null

linkedList.removeAt(0);
console.log(linkedList.toString()); // ( 5 ) -> ( 1 ) -> null
```

## License

This project is free to use
