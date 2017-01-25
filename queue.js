'use strict';

const SinglyLinkedList = require('./singly-linked-list');

const Queue = module.exports = SinglyLinkedList;

Queue.prototype.enqueue = function(val) {
  this.append(val);
};

Queue.prototype.dequeue = function() {
  let val = this.head.val;

  this.head = this.head.next;

  return val;
};
