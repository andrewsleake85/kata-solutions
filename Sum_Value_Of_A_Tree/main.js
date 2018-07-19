//this script adds up all values in a tree


var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){

if (root === null) return 0;

  function Node(value, left, right)
{
  this.value = value;
  this.left = left;
  this.right = right;
}

var currentNode = new Node(root.value, root.left, root.right);

  
  
return currentNode.value + sumTheTreeValues(currentNode.left)+ sumTheTreeValues(currentNode.right);
}



console.log(sumTheTreeValues(unbalancedNode));