// time complexity for balanced tree: O(log(n))
// unbalanced tree: O(n)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insert(val, root=this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  search(val, root=this.root) {
    if (!root) return false;
    if (val < root.val) {
      return this.search(val, root.left);
    } else if (val > root.val) {
      return this.search(val, root.right);
    } else {
      return true;
    }
  }
}