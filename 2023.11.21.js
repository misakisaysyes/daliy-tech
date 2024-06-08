// 线程池

let dataArr = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let threhold = 3



const testRequest = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seed = (Math.random().toString().substr(2) - 0) % 2
            if(seed) {
                resolve(data)
            } else {
                reject(data)
            }
        }, Math.random() * 1000)
    })
}



// 数组长度监听器件
const debounce = (cb, delay) => {
    let timer
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb(...args)
            clearTimeout(timer)
            timer = null
        }, delay)
    }
}

const arrProxy = (arr, cb) => {
    return new Proxy(arr, {
        set: function(target, key, value, receiver) {
            cb()
            return Reflect.set(target, key, value, receiver)
        }
    })
}

// const limitRequests = (
//     rawDataArr, 
//     request,
//     maxReq = 3,  // 请求并发数
//     repeat = 2, // 请求失败重发次数，小于0表示无限重传
//     showLog = true, // 打印发送log
// ) => {
//     const log = showLog ? rawDataArr.reduce((prev, cur) => {
//         prev[cur] = []
//         return prev
//     }, {}): null
//     const dataArr = arrProxy(rawDataArr.map(rawData => ({ data: rawData })), debounce(() => {
//         log && console.log(log)
//     }, 2048))

//     const limitCore = max => {
//         if (!dataArr.length) {
//             return
//         }
//         while(max--) {
//             const { data } = dataArr.shift()
//             new Promise((resolve, reject) => {
//                 request(data)
//                     .then(res => resolve(res))
//                     .catch(err => reject(err))
//             })
//                 .then(res => {
//                     console.log(`success ${res}`)
//                     log && log[data].push('success')
//                     limitCore(1)
//                 })
//                 .catch(err => {
//                     if (repeat < 0 || (log && log[data].length < repeat)) {
//                         dataArr.push({ data })
//                         log[data].push('failed')
//                     } else if (log && log[data].length === repeat) {
//                         log[data].push('die')
//                     }
//                     limitCore(1)
//                     console.log(`failed ${err}`)
//                 })
//         }
//     }
//     limitCore(maxReq)
// }

// limitRequests(dataArr, testRequest)

// 哪一个请求发送了，就用哪一个请求去补位
const limitRequests = (dataArr, testRequest, maxReq = 3, repeat = -1, showLog = true) => {
    let log = dataArr.reduce((prev, cur) => {
        
    }, {})

    let pool = Promise.race(dataArr.splice(0, maxReq).map((data, idx) => {
        return new Promise((resolve, reject) => {
            testRequest(data)
                .then(res => {
                    resolve(idx)
                })
                .catch(err => {
                    reject(idx)
                })
        })
    }))

    // pool.then(res => console.log(`success ${res}`)).catch(err => console.log(`failed ${err}`))

    while(dataArr.length) {
        let pool = pool
            .then(res => {

            })
            .catch(err => {

            })
    }


}

limitRequests(dataArr, testRequest)




