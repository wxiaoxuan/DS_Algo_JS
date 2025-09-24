// ====================================================================================
// BINARY SEARCH TREES
// ====================================================================================

// Trees are Non-linear 

// Tree Terminology 
// - Root : top node in tree
// - child, parent
// - sibling : a grp of nodes w same parent 
// - leaf : node w no children
// - edge : connection btw 1 node & another 

// Commonly Used In:
// - HTML DOM
// - Network Routing 
// - AI
// - Folders in Operating Systems 
// ------------------------------------------------------------------------------------

// BINARY SEARCH TREES
// - each node can have at most 2 children
// - smaller (L), bigger (R)

// BIG O
// - insertion - O(log n)
// - searching - O(log n)

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




