var Tree = function(val) {
  this.val = val;
  this.children = [];
};

Tree.prototype.breadthLog = function() {
  let ordered = Array.prototype.concat(this, this.children);
  let i = 1, j = ordered.length;

  while (i < j) {
    for (i; i < j; i++) {
      ordered[i].children.forEach( child => ordered.push(child));
    }
    j = ordered.length;
  }
  for (i in ordered) ordered[i] = ordered[i].val;
  return ordered;
};

var root = new Tree('A');

root.children.push(new Tree('B'));
root.children.push(new Tree('C'));
root.children.push(new Tree('F'));
root.children[0].children.push(new Tree('D'));
root.children[0].children.push(new Tree('M'));
root.children[0].children.push(new Tree('E'));
root.children[0].children[0].children.push(new Tree('K'));
root.children[2].children.push(new Tree('G'));

console.log('Test result:', root.breadthLog() !== ['A', 'B', 'C', 'F', 'D', 'M', 'E', 'G', 'K'] ? 'passed!' : 'failed!');
