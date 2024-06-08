const dataArr = ['1','2','3','4','5','6','7','8','9']

const testRequest = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seed = (Math.random().toString().substr(2) - 0) % 2
            resolve(data)
            // if(seed) {
            //     resolve(data)
            // } else {
            //     reject(data)
            // }
        }, Math.random() * 1000)
    })
}

// 知耕
// 正心诚意格物致知，躬行臻善创造价值

// const limitRequests = (dataArr, request, maxReq) => {
//     const pool = dataArr.splice(0, maxReq).map((data, idx) => {
//         return request(data)
//             .then(res => { return ({ data: res, idx }) })
//             .catch(err => { return ({ data: err, idx }) })
//     })

//         let p = Promise.race(pool)
  
//         for (let rawData of dataArr) {
//             p = p.then(res => {
//                 const { data, idx } = res
//                 pool[idx] = request(rawData)
//                     .then(res => { return ({ data: res, idx }) })
//                     .catch(err => { return ({ data: err, idx }) })
//                 console.log(res)
//                 return Promise.race(pool)
//             })
//         }
// }

// limitRequests(dataArr, testRequest, 3)


//  一道面试题 并发控制引发的思考🤔
// promise并发 控制   并行、串行、并发
// tabable 库

let data = dataArr.shift()
do {
    let p = new Promise((resolve, reject) => {
        resolve(data)
    }).then(res => {
        console.log(res)
        data = dataArr.shift()
    })
} while(dataArr.length)
sequence.reduce(
    (last, url, currentIndex) => {
    return last.then(() => {
        // 返回最快改变状态的 Promise
        return Promise.race(promises)
    }).catch(err => {
        // 这里的 catch 不仅用来捕获前面 then 方法抛出的错误
        // 更重要的是防止中断整个链式调用
        console.error(err)
    }).then((res) => {
        // 用新的 Promise 替换掉最快改变状态的 Promise
        promises[res] = handler(sequence[currentIndex]).then(
            () => { return res });
    })
}, Promise.resolve()).then(() => {
    return Promise.all(promises)
})


