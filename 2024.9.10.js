const list = [
    {
        id: 'task1',
        deps: [],
        runTask: () => 1
    },
    {
        id: 'task2',
        deps: ['task1', 'task3'],
        runTask: (res1, res3) => res1 + res3 + 1
    },
    {
        id: 'task3',
        deps: ['task4'],
        runTask: res4 => res4 + 1
    },
    {   id: 'task4',
        deps: ['task1'],
        runTask: res1 => res1 + 1
    }
]

/**
 * 无环状
 */
var runAllTasks = (list, cb) => {
    const res = {};
    while(list.length) {
        // 从队列中取一个任务
        const task = list.shift();
        const { id, deps, runTask } = task;

        // 判断任务是否能执行
        //// 任务不需要依赖的情况
        if (deps.length == 0) {
            res[id] = runTask();
            continue;
        }

        //// 任务需要依赖的情况
        const params = [];
        if (deps.reduce((prev, cur) => { 
            if (res[cur]) {
                params.push(res[cur]);
                return true;
            } else {
                return false;
            }
        }, true)) {
            res[id] = runTask(...params);
        } else {
            list.push(task);
        }
    }
    cb(res);
}

runAllTasks(list, console.log);

