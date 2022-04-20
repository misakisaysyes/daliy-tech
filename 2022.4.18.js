const coreAsyncOp =  param => new Promise((resolve, reject) => {
    let isResolved = Math.random() < 0.95
    if (isResolved) {
        resolve(`${param} async op success`)
    } else {
        reject(`${param} async op fail`)
    }

})


const pluginA = {
    open: async (param, ctx) => {
        ctx['pluginA'] = await coreAsyncOp(`${param} pluginA `)
    }
}

const pluginB = {
    open: async (param, ctx) => {
        ctx['pluginB'] = await coreAsyncOp(`${param} pluginB `)
    }
}

const pluginC = {
    open: async (param, ctx) => {
        ctx['pluginC'] = await coreAsyncOp(`${param} pluginC `)
    }
}

const pluginD = {
    open: async (param, ctx) => {
        ctx['pluginD'] = await coreAsyncOp(`${param} pluginD `)
    }
}

const app = [
    pluginA,
    pluginB,
    pluginC,
    pluginD
]

let ctx = {}
app.reduce((pre, cur) => pre.then(arr => Promise.all([...arr, cur.open('app', ctx).then(() => {})])), Promise.resolve([]))
setTimeout(() => console.log('results', ctx), 1024)

// ref： https://es6.ruanyifeng.com/#docs/promise#Promise-resolve