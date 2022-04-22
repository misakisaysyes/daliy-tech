const limitRequests = (
    dataArr, 
    request,
    maxReq = 3,  // 请求并发数
) => {

    const limitCore = max => {
        if (!dataArr.length) {
            return
        }
        while(max--) {
            const data = dataArr.shift()
            new Promise((resolve, reject) => {
                request(data)
                    .then(res => resolve(res))
                    .catch(err => reject(err))
            })
                .then(res => {
                    console.log(`success ${res}`)
                    limitCore(1)
                })
        }
    }

    limitCore(maxReq)
}

limitRequests([1,2,3,4,5,6,7,8,9,0], async d => new Promise((resolve, reject) => {setTimeout(() => resolve(d), 1000) }))

