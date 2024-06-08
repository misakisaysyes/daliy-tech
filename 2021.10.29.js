const debounce = (fn, delay) => {
    let timer
    return () => {
        if (timer) clearTimeout(timer)
        console.log('debounce', timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}


// let i = 0
// setInterval(debounce(() => console.log(i++), 1000), 2000)

// const throttle = (fn, delay) => {
//     let timer
//     return () => {
//         if (timer) return
//         timer = setTimeout(() => {
//             fn()
//             clearTimeout(timer)
//             timer = null
//         }, delay) 
//     }
// }


// let i = 0
// setInterval(throttle(() => console.log(i++), 1000), 100)


Function.prototype.callFn = function (context) {
    // 为null的时候指向全局对象
    context = context || window
    // 为context添加函数
    context.fn = this
    // 处理参数，这里arguments是类数组对象，只能循环
    let args = []
    for(let i = 1; i < arguments.length; i++){
      args.push(arguments[i])
    }
    // 执行函数
    context.fn(...args)
    // 执行完毕后删除函数
    delete context.fn
}

const a = () => {
    console.log(this)
    console.log('func')
}
const obj1 = { id: 'obj1' }
a.call()
