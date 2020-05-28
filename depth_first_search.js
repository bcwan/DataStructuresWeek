function depthFirst(root) {
  let stack = [ root ];
  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function depthFirstRecursion(root) {
  if (!root) return;
  console.log(root.val);
  depthFirstRecursion(root.left);
  depthFirstRecursion(root.right);
}