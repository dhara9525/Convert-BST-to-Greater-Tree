// Javascript JS solution,  faster than 93.90% of JavaScript online submissions, Convert BST to Greater Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) 
{
    var sum=0;
    convert(root);
    
    function convert(root)
    {
        if(!root)
            return;
        convert(root.right);
        root.val+=sum;
        sum=root.val;
        convert(root.left);       
    }
    return root;
};