function breathFirst(root) {
  let queue = [ root ];
  while (queue.length) {
    let node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}