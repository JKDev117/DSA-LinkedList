/* 2. Create a singly linked list

Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
Add Tauhida to the list.
Remove Husker from the list.
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
Implement a function called insertAt() that inserts an item at a specific position in the linked list.
Add Athena before Boomer using your insertBefore() function.
Add Hotdog after Helo using the insertAfter() method.
Using the insertAt() method insert Kat in the 3rd position of the list.
Remove Tauhida from the list.

*/

const LinkedList = require('./01-linked-list-class')

function main(){

    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.print() // => Apollo, Boomer, Helo, Husker, Starbuck

    SLL.insertLast('Tauhida')
    SLL.print() // => Apollo, Boomer, Helo, Husker, Starbuck, Tauhida

    SLL.remove('Husker')
    SLL.print() // => Apollo, Boomer, Helo, Starbuck, Tauhida

    SLL.insertBefore('Athena', 'Boomer') //
    SLL.print() //=> Apollo, Athena, Boomer, Helo, Starbuck, Tauhida

    SLL.insertAfter('Hotdog', 'Helo')
    SLL.print() //=> Apollo, Athena, Boomer, Helo, Hotdog, Starbuck, Tauhida

    SLL.insertAt('Kat', 3)
    SLL.print() //=> Apollo, Athena, Boomer, Kat, Helo, Hotdog, Starbuck, Tauhida

    SLL.remove('Tauhida')
    SLL.print() //=> Apollo, Athena, Boomer, Kat, Helo, Hotdog, Starbuck
}

main()

// node 02-singly-linked-list.js