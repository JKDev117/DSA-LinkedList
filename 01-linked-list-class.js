/* 1. Create a linked list class

Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

*/


class _Node { //underscore _ indicates a private class
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; //head to indicate beginning of the list; the head always contains the 1st node
    }

    insertFirst(item){
        this.head = new _Node(item, this.head)
    }

    insertLast(item){
        if(this.head === null){ //the beginning of the list is indicated by head
            this.insertFirst(item)
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(insert_item, search_item){
        if(this.head.value === search_item){
            this.head = new _Node(insert_item, this.head)
            return
        }    

        let currNode = this.head
        let previousNode = this.head
        
        while((currNode !== null) && (currNode.value !== search_item)){
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null){
            console.log(`Item '${search_item}' not found.`)
            return
        }
        previousNode.next = new _Node(insert_item, currNode)
    }

    insertAfter(insert_item, search_item){
        let tempNode = this.head;
        while((tempNode !== null && tempNode.value !== search_item)){
            tempNode = tempNode.next;
        }
        if(tempNode === null){
            console.log(`Item '${search_item}' not found.`)
            return
        }
        if(tempNode.next == null){
            tempNode.next = new _Node(insert_item)
        }
        let tempNextNode = tempNode.next
        tempNode.next = new _Node(insert_item, tempNextNode)
    }
    
    insertAt(newNode, index){
        if(index === 0){
            this.insertFirst
            return
        }
        let currIndex = 0
        let currNode = this.head
        let previousNode = this.head
        while(currNode !==null && currIndex !== index){
            currIndex++
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null){
            console.log(`index doesn't exist`)
            return
        }
        previousNode.next = new _Node(newNode)
        previousNode.next.next = currNode
    }
    
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    print(){
        let currNode = this.head;
        while(currNode != null){
            console.log(currNode.value)
            currNode = currNode.next
        }
        console.log()
    }

}

module.exports = LinkedList