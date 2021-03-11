let traverse = function(node, target, final) {
    if (node === null) {
        return final;
    }
    if (Math.abs(node.value - target) < Math.abs(final - target)) {
        final = node.value; 
    };
    if (target < node.value) {
        return traverse(node.left, target, final);
    }
    if (target > node.value) {
        return traverse(node.right, target, final);
    }
    return final;
}

function findClosestValueInBst(tree, target) {
// Write your code here.
//var for output equal treevalue for now
//if target is more than node value
//traverse left
//else traverse right
//compare output value to node value
//whichever is closer will be new output
//return output
let final = tree.value;

return traverse(tree, target, final);
}

// This is the class of the input tree. Do not edit.
class BST {
constructor(value) {
this.value = value;
this.left = null;
this.right = null;
}
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;