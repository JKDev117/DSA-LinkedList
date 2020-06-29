/* 5. Reverse a list

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). 

For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. 


Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. 


BONUS: Solve this problem using both recursive and iterative algorithms.

*/
const LinkedList = require('./01-linked-list-class')

const list0 = []
const list1 = ['Apollo']
const list2 = ['Apollo', 'Athena']
const list3 = ['Apollo', 'Athena', 'Boomer']
const list4 = ['Apollo', 'Athena', 'Boomer', 'Kat']
const list5 = ['Apollo', 'Athena', 'Boomer', 'Kat', 'Helo', 'Hotdog', 'Starbuck']

const LL0 = new LinkedList()
const LL1 = new LinkedList()
const LL2 = new LinkedList()
const LL3 = new LinkedList()
const LL4 = new LinkedList()
const LL5 = new LinkedList()

list0.forEach(element => LL0.insertLast(element))
list1.forEach(element => LL1.insertLast(element))
list2.forEach(element => LL2.insertLast(element))
list3.forEach(element => LL3.insertLast(element))
list4.forEach(element => LL4.insertLast(element))
list5.forEach(element => LL5.insertLast(element))


/* --------------------------------------------------------------------------------- */

function reverseList(list){

    if(list.head == null || list.head.next == null){ //list is empty or there is only one node
        return list
    }

    let count = 1

    let pointer = list.head

    while(pointer.next !== null){
        count++
        pointer = pointer.next
    } 

    let tail = pointer

    let curr = list.head
    list.head = tail
    //console.log("head is", list.head.value)
    tail = curr
    //console.log("tail is", tail.value)

    let prev = null; 
    let next;

    for(let i =0; i<count; i++){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    return list
    
}
/* --------------------------------------------------------------------------------- */

reverseList(LL0)
LL0.print() 
//=> 

reverseList(LL1)
LL1.print()
//=> previous: Apollo  
//=> after: Apollo

reverseList(LL2)
LL2.print() 
//=> previous: Apollo, Athena 
//=> after: Athena, Apollo

reverseList(LL3)
LL3.print() 
//=> previous: Apollo, Athena, Boomer
//=> after: Boomer, Athena, Apollo

//node 05-reverse-a-list


