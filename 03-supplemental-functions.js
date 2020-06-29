/* 3. Supplemental functions for a linked list

Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

display: displays the linked list
size: returns the size of the linked list
isEmpty: finds if the list is empty or not (without using the size() function)
findPrevious: finds the node before the item you are looking for
findLast: returns the last node in the linked list

*/
const LinkedList = require('./01-linked-list-class')

const list = ['Apollo', 'Athena', 'Boomer', 'Kat', 'Helo', 'Hotdog', 'Starbuck']

const LL = new LinkedList()


list.forEach(element => LL.insertLast(element))

//LL.print() //=> Apollo, Athena, Boomer, Kat, Helo, Hotdog, Starbuck

/* outside functions ------------------------------------------------------- */
function display(list) {
    let current = list.head
    while(current !== null){
        console.log(current.value)
        current = current.next
    }
}

function size(list) {
    let size = 0
    let current = list.head
    while(current !== null) {
        current = current.next
        size ++
    }
    return size
}

function isEmpty(list) {
    return list.head == null
}

function findPrevious(searchNode, list) {
    let current = list.head
    let previous = list.head
    while(current !== null && current.value !== searchNode){
        previous = current
        current = current.next
    }
    if(current == null){
        return 'Item you are looking for not found'
    }
    return previous.value
}

function findLast(list) {
    if(list.head == null){
        return 'list is empty'
    }
    if(list.head.next == null){
        return list.head.value
    }
    let current = list.head
    let previous = list.head
    while(current !== null){
        previous = current
        current = current.next
    }
    return previous.value
}

/* -------------------------------------------------------------------------- */

display(LL) //=> Apollo, Athena, Boomer, Kat, Helo, Hotdog, Starbuck
console.log()

console.log(size(LL)) //=> 7
console.log()

console.log(isEmpty(LL)) //=> false
console.log()

console.log(findPrevious('Athena', LL)) //=> Apollo
console.log()

console.log(findLast(LL)) //=> Starbuck
console.log()


//node 03-supplemental-functions