/**
 * 查找数组中和为n的两个数的所有情况
 */
// [1,1,1,1] 2
// [[1,1],[1,1],...]
const findSumN = (arr, N) => {
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == N) {
                ans.push([arr[i], arr[j]]);
            }
        }
    }
    return ans;
}

console.log(findSumN([1,1,1,1], 2));

function LazyMan(name) {
    let self = this;
    let lock = false;
    let queue = [];

    console.log('this is', name);

    this.sleep = function(delay) {
        lock = true;
        setTimeout(() => {
            lock = false;
            queue.map(fn => fn());
        }, delay * 1000);
        return self;
    }

    this.sleepFirst = function(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(self);
            }, delay * 1000);
        }).then(() => {
            return self;
        })
    }

    this.eat = function(meal) {
        if(!lock) {
            console.log('eat', meal);
        } else {
            queue.push(() => console.log('eat', meal));
        }
        return self;
    }

    return this;
}

/**
 * 输出
 * this is Hank
 */
LazyMan('Hank');

/**
 * 输出
 * this is Hank
 * eat dinner
 */
LazyMan('Hank').eat('dinner');

/**
 * 输出
 * this is Hank
 * 等待3s
 * eat dinner
 */
LazyMan('Hank').sleep(3).eat('dinner');

/**
 * 输出
 * this is Hank
 * eat dinner
 * eat supper
 */
LazyMan('Hank').eat('dinner').eat('supper');

/**
 * 输出
 * 等待3s
 * this is Hank
 * eat dinner
 */
LazyMan('Hank').sleepFirst(3).eat('dinner');

