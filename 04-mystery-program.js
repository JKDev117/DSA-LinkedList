/* 4. Mystery program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 

What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head; //O(1)
    while (current !== null) { //O(n)
        let newNode = current; //O(1)
        while (newNode.next !== null) { //O(n)
            if (newNode.next.value === current.value) { //O(1)
                newNode.next = newNode.next.next; //O(1)
            }
            else {
                newNode = newNode.next; //O(1)
            }
        }
        current = current.next; //O(1)
    }
}

*/

//A1. It is trying to solve the problem of there being duplicates in the list.


//A2.  O(n^2) ?

