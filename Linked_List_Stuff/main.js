// a bunch of linked list (singly) implementations
// have fun


//the node constructor 
function Node(data) {
  this.data = data;
  this.next = null;
}


//will push a new node with data onto the head of a list, returns new head
function push(head, data) {
  // Go.
  let newBoi = new Node(data);
  newBoi.next = head;
  return newBoi;
  
}


//builds a linked list of 3 elements long with last element next pointing to null. returns head
function buildOneTwoThree() {

let newList =null;

newList = push(newList, 3);
newList = push(newList, 2);
newList = push(newList, 1);

return newList;

}

//finds the length of a given list, returns an int
function length(head) {
  
  let len = 0;
  
  while(head)
    {
      len++;
      if (head.next) head = head.next;
      else if (!head.next) head = null;
    } 
    
    return len;
  
}


//given a head, counts how many items in the list contain given data value. returns an int
function count(head, data) {
  
  let count = 0;
  while(head)
    {
      if(head.data == data) count ++;
      if (head.next) head = head.next;
      else if (!head.next) head = null;
      
    } 
    
    return count;
}


//given a head node, returns the node at specified index. checks for bad index inputs
function getNth(node, index) {
  
  let count = 0;
//if node is null list, or index is greater than length or less than o (invalid)
  if (!node || index < 0 || index >= length(node) ) throw new TypeError;
  
  
  while(node)
    {

      if (index === count) return node;       
      if(node.next) { node = node.next; count++; }
      else if (!node.next) node = null;
      }
}


//insert a new node with 'data' at the index given of the head given. returns head of list
function insertNth(head, index, data) {
  
  let count = 0;


 //if the head is null....
 if(!head){ head = new Node(data); return head; }
 
 //save the original head
 let originalHead = head;

 //make sure the index is valid so  greater than 0 but not more than 1 bigger of the length
 if (index < 0 || index -1 > length(head) ) throw new TypeError;
  
 //special case to insert at top of the list
 if (index === 0 ) 
  {
  let temp = new Node(data);
  temp.next = head;
  head = temp;
  return head;
  }
  

  //move through the list to the correct index
  while (index > count) {
    var prevItem = head;
    head = head.next; 
    count++; 
    }

    //once we get there, make new node
    var inserted = new Node(data)
    //point the previous item to the new node
    prevItem.next = inserted;
    //point the new node to the node that was there before
    inserted.next = head;
  
   //return original head of list
  
   return originalHead;
}


//build a list of 3 nodes
sample_head = buildOneTwoThree();
console.log(sample_head);
sample_head = push(sample_head,"elastic");
console.log(sample_head);
//etc.....