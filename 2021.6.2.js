// const testTapableObj = require('tapable')

// const { SyncHook } = require('tapable')

// const hook = new SyncHook(['arg1', 'arg2', 'arg3'])

// hook.tap('hook1', (arg1, arg2, arg3) => {
//     console.log('--- hook ---', arg1, arg2, arg3)
// })

// hook.call([1,2,3])

// console.log('查看tapable', testTapableObj)

const { SyncHook, AsyncSeriesHook } = require('tapable')

class Car {
    constructor() {
        this.hooks = {
            
        }
    }
}