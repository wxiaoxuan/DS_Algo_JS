-----------------------------------
Data Structures 
-----------------------------------
- simply a way to store and organize data so we can use it efficiently

-----------------------------------
Simple analogy: Your house
-----------------------------------
Array / List → A row of lockers numbered 0, 1, 2… You can find things fast if you know the locker number.

Stack → A stack of plates. You add (push) to the top, take (pop) from the top. Last in, first out (LIFO).

Queue → A line at the bakery. First person in line gets served first. First in, first out (FIFO).

Linked List → A scavenger hunt where each clue points to the next clue. You start at the first and follow the chain.

Hash Table / Dictionary → A magic cabinet where you can label drawers with anything (“keys”) and instantly find the matching item (“value”).

Tree → A family tree chart — one root at the top, branches leading to children, grandchildren, etc.

Graph → A map of cities with roads — points (nodes) connected by lines (edges).

-----------------------------------
Why do we need them?
-----------------------------------
Because different problems need different ways of storing and accessing data:

Need to look something up quickly? → Use a Hash Table.

Need ordered data? → Use an Array or List.

Need to undo actions? → Use a Stack.

Need to handle things in the order they arrived? → Use a Queue.

Need hierarchical relationships? → Use a Tree.


-----------------------------------
In short: 
-----------------------------------
Data structures are like choosing the right tool or container for the job.
You could store everything in a single messy box, but you’d waste time digging through it.




-----------------------------------
- constructor() : a method to create new objects 
- class : creates a constant (cnt redefine it)


example:

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student('Ben', 'Tan');
let secondStudent = new Student('Alex', 'Tan');