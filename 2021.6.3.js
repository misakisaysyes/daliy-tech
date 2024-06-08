const { SyncHook, AsyncSeriesHook } = require('tapable')

class Car {
    constructor() {
        this.hooks = {
            accelerate: new SyncHook(['newSpeed']),
            brake: new SyncHook(),
            calculateRoutes:new AsyncSeriesHook(['source', 'target', 'routesList'])
        }
    }
}

const myCar = new Car()
myCar.hooks.accelerate.tap('accelerate hook', newSpeed => console.log(`accelerate to ${newSpeed}`))
myCar.hooks.brake.tap('brake hook', () => console.log('brake the car'))
myCar.hooks.calculateRoutes.tapPromise('calculateRoutes hook', (source, target, routesList) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calculateRoutes', source, target, routesList)
            resolve()
        }, 1000)
    })
})

console.log(' --- 测试钩子 --- ')
myCar.hooks.accelerate.call(101)
myCar.hooks.brake.call()

console.time('cost')
console.time('cost1')
myCar.hooks.calculateRoutes.promise('source', 'target', 'routesList')
    .then(res => {
        console.timeEnd('cost')
    })
    .catch(err => {
        console.log(err)
    })

myCar.hooks.calculateRoutes.callAsync('source1', 'target1', 'routesList1', err => {
   console.log('this is a test')
   console.timeEnd('cost1')
})

