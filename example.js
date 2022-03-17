/*
Binary tree and depth first search implementation
*/

// node
function Node(val) {
    this.value = val
    this.left = null
    this.right = null
}

// tree
function Tree() {
    this.treeRoot = null

    this.addNode = function(val) {
        // if root = null
        if (!this.treeRoot) {
            this.treeRoot = new Node(val)
        }else {
            let current = this.treeRoot
            let isPlaced = false
            while (!isPlaced) {
                // go left
                if (current.value>val) {
                    if (!current.left) {
                        current.left = new Node(val)
                        isPlaced = true
                    }else {
                        current = current.left
                    }
                }
                // go right
                if (current.value<val) {
                    if (!current.right) {
                        current.right = new Node(val)
                        isPlaced = true
                    }else {
                        current = current.right
                    }
                }
            }
        }
    }
}
/*
        _ 5 _
     _ 4   _ 7 _
    2     6     8
*/
//tree setup 
const binaryTree = new Tree()
binaryTree.addNode(5)
binaryTree.addNode(7)
binaryTree.addNode(8)
binaryTree.addNode(6)
binaryTree.addNode(4)
binaryTree.addNode(2)



// ************************* depth first search algorithm ************************************

function DFS_Find (root) {

    const visitedNodes = new Set()
    const stack = [root]

    while (stack.length>0) {
    
        const curr = stack.pop()

        let currChild = getChildAsNode(curr)
        currChild = currChild.filter(el=> !visitedNodes.has(el.value))

        if (currChild.length>0) {
            currChild.forEach(el=> {
                stack.push(el)
            })
            visitedNodes.add(curr.value)
        }else {
            console.log("end leaf:"+curr.value)
            visitedNodes.add(curr.value)
        }
    }
    return visitedNodes
}

// driver
console.log("visited nodes:",DFS_Find(binaryTree.treeRoot))

/*********************************************************************************************/


// get child node info 
function getChildInfo(node) {
    const childArr = []
    if (node.left) {
        childArr.push({direction:"left",childVal:node.left.value})
    }
    if (node.right) {
        childArr.push({direction:"right",childVal:node.right.value})
    }
    return childArr
}
// get child node 
function getChildAsNode(node) {
    const nodeArr = []

    for (const el of getChildInfo(node)) {
        nodeArr.push(node[el.direction])
    }

    return nodeArr
}
