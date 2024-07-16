// 一个数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出所有结果
// 输入： nums = [10,  30,  26,  31,  47,  60,  18,  48,  11,  67], target = 78
// 输出： [31, 47] [60, 18] [30, 4]

const findSum = (nums, target) => {
    let res = [], t1, t2;
    while(nums.length) {
        t1 = nums.shift();
        t2 = nums.findIndex(n => n === target - t1);
        if(t2 > -1) {
            res.push([t1, target - t1]);
            nums.splice(t2, 1);
        }
    }
    return res;
}

console.log(findSum([10,  30,  26,  31,  47,  60,  18,  48,  11,  67], 78));