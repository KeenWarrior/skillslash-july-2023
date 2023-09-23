var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.next = null;
        this.value = value;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.insertAtBeginning = function (value) {
        var newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };
    LinkedList.prototype.insertAtEnd = function (value) {
        if (!this.head) {
            this.insertAtBeginning(value);
            return;
        }
        var newNode = new LinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.value, '->');
            current = current.next;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
list.insertAtBeginning(4);
list.print();
