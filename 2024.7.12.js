function Node () {
    this.left = null;
    this.right = null;
    this.val = undefined;
}

const levelTraverse = (node) => {
    const  queue = [];
    const result = [];
    queue.push(node);
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const n = queue.shift();
            result.push(n.val);
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
        }
    }
    return result;
}


const upstairs = (level) => {
    if (level === 1 || level === 2) {
        return level;
    }

    let n, n_1 = 2, n_2 = 1;
    for(let i = 2; i < level; i++) {
        n = n_1 + n_2;
        n_2 = n_1;
        n_1 = n;
    }
    return n;
}
console.log(upstairs(3));