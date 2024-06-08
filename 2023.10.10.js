// 失败重试
const retry = (request, count = 3) => {
        console.log(count)
        return request()
                .catch((err) => {
                    if  (count > 0) {
                        return retry(request, count - 1)
                    } else {
                        return request(true)
                    }
                })
}

const request = (res = false) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (Math.floor(Math.random() * 10) % 2 === 1) {
        //     resolve('true');
        // } else {
        //     reject('false');
        // }
        if(res) {
            resolve(res)
        } else {
            reject(res)
        }
    }, 1000)
})

retry(request).then(res => console.log('then', res)).catch(err => console.log('catch', err))

// 轮询场景，针对很长的请求，前端不断查询后段的某个状态
