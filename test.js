function LazyMan(name) {
    let self = this;
    let lock = false;
    let queue = [];

    // 初始化时打印名字
    function init() {
        console.log('this is', name);
        processQueue();
    }

    // sleep 方法用于延迟执行后续任务
    this.sleep = function(delay) {
        lock = true;
        setTimeout(() => {
            lock = false;
            processQueue();
        }, delay * 1000);
        return self;
    };

    // sleepFirst 方法用于在初始化之后立即执行延迟操作
    this.sleepFirst = function(delay) {
        lock = true;
        setTimeout(() => {
            lock = false;
            console.log('等待' + delay + 's');
            init();
        }, delay * 1000);
        return self;
    };

    // eat 方法用于执行吃饭操作
    this.eat = function(meal) {
        queue.push(() => {
            console.log('eat', meal);
            processQueue();
        });
        return self;
    };

    // 处理队列中的任务
    function processQueue() {
        if (!lock && queue.length > 0) {
            lock = true;
            queue[0]();
        }
    }

    init();
    return this;
}

// 测试用例
// LazyMan('Hank'); // 输出: this is Hank

// LazyMan('Hank').eat('dinner'); // 输出: this is Hank; eat dinner

// LazyMan('Hank').sleep(3).eat('dinner'); // 输出: this is Hank; 等待3s; eat dinner

// LazyMan('Hank').eat('dinner').eat('supper'); // 输出: this is Hank; eat dinner; eat supper

LazyMan('Hank').sleepFirst(3).eat('dinner'); // 输出: 等待3s; this is Hank; eat dinner

