let node;

export default node = class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const hello = new node("hello");

console.log(hello);