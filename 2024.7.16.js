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


// 实现一个串行异步任务队列
class Queue {
    constructor(asyncCb) {
        this.asyncCb = asyncCb;
        this.lock = false;
        this.prevPromise = [];
    }

    // 请求竞争
    raceCall(...param) {
        if(this.lock) {
            setTimeout(() => {
                this.call(...param);
            }, 500);
        } 
        this.lock = true;
        return this.asyncCb(...param).finally(() => {
            console.log(param);
            this.lock = false 
        });
    }

    // 串行请求
    syncCall(...param) {
        let p = this.asyncCb(...param);
        this.prevPromise.push(p);
        return Promise.allSettled(this.prevPromise).then(() => p);
    }
}

const queue = new Queue(async (param) => {
    await new Promise(resolve => setTimeout(resolve, 1000 * Math.random()));
    return param + 2;
});
 
queue.syncCall(1).then(console.log);
queue.syncCall(2).then(console.log);
queue.syncCall(3).then(console.log);

