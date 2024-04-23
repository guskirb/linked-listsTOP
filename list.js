import node from "./node";

class LinkedList {
    constructor(list) {
        this.list = list;
    }

    append(value) {
        if (this.list.value === null) {
            this.list.value = value;
        }
    }
}
