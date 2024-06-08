// 防抖
const debounce = (fn, delay) => {
    let timer
    return (...args) => {
        // console.log(`debounce start ${new Date().toString()}`)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}

// 节流
const throttle = (fn, delay) => {
    let timer
    return (...args) => {
        if(timer) {
            return
        }
        timer = setTimeout(() => {
            fn(...args)
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}

// 防抖测试 
const debounce_test = debounce(() => console.log(`debounce fn execute ${new Date().toString()}`), 1000)

// 节流测试
const throttle_test = throttle(() => console.log(`throttle execute ${new Date().toString()}`), 1000)

const rl = require('readline').createInterface(process.stdin)
rl.on('line', debounce_test)





