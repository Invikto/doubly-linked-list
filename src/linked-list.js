const Node = require('./node');

class LinkedList {
  constructor() {
    this.arr = [];
  }

  get length() {
    return this.arr.length;
  }

  get _head() {
    return this.arr[0];
  }

  get _tail() {
    const last = this.arr.length - 1;

    return this.arr[last];
  }

  append(data) {
    const last = this.arr.length - 1;
    const prev = this.arr[last];
    const node = new Node(data, prev);

    this.arr.push(node);
    if (this.arr[last]) {
      this.arr[last].next = node;
    }

    return this;
  }

  head() {
    return this.arr[0] ? this.arr[0].data : null;
  }

  tail() {
    const last = this.arr.length - 1;

    return this.arr[last] ? this.arr[last].data : null;
  }

  at(index) {
    return this.arr[index].data;
  }

  insertAt(index, data) {
    const prev = this.arr[index - 1];
    const next = this.arr[index];
    const node = new Node(data, prev, next);

    this.arr.splice(index, 0, node);
    if (this.arr[index - 1]) {
      this.arr[index - 1].next = this.arr[index];
    }
    if (this.arr[index + 1]) {
      this.arr[index + 1].prev = this.arr[index];
    }

    return this;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  clear() {
    const n = this.arr.length;

    this.arr.splice(0, n);

    return this;
  }

  deleteAt(index) {
    this.arr.splice(index, 1);

    return this;
  }

  reverse() {
    this.arr.reverse();

    return this;
  }

  indexOf(data) {
    const node = this.arr.find(node => node.data === data);

    return this.arr.indexOf(node);
  }
}

module.exports = LinkedList;
