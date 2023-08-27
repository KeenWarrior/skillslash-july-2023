class LinkedListNode<T> {
    next: LinkedListNode<T> | null = null;
    value: T;

    constructor(value: T, next: LinkedListNode<T> | null = null) {
        this.value = value;
    }
    
}

class LinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private tail: LinkedListNode<T> | null = null;

    insertAtBeginning(value: T) {
        const newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAtEnd(value: T) {
        if(!this.head) {
            this.insertAtBeginning(value);
            return;
        }

        const newNode = new LinkedListNode(value);
        this.tail!.next = newNode;
        this.tail = newNode;
    }
   
    print() {
        let current = this.head;
        while(current) {
            console.log(current.value, '->');
            current = current.next;
        }
    }
}

const list = new LinkedList<number>();
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
list.insertAtEnd(4);
list.insertAtEnd(5);

list.print();


