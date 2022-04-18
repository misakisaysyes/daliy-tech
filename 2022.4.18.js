const test = i => {
    return new Promise((resolve, reject) => {
      
            setTimeout(() => {
                console.log('?', i)
                if (i > 1) {
                    reject()
                } else {
                    resolve(i) 
                }
            }, 1000)
        
    })
}

const func = async i => {
    let res = await test(i)
}

let arr = [
    {
        open: async i => {
            let res = await test(i)
            console.log('open 1', res)
            return res
        }
    },
    {
        open: async i => {
            let res = await test(i)
            console.log('open 2', res)
            return res
        }
    },
    {
        open: async i => {
            let res = await test(i)
            console.log('open 3', res)
            return res
        }
    },
    {
        open: async i => {
            let res = await test(i)
            console.log('open 4', res)
            return res
        }
     },
]

let ctx = 1
arr.reduce((m, p) => m.then(v => Promise.all([...v, Promise.resolve().then(() => p.open(ctx)).then(res => {
    console.log(res, v)
    ctx += res
    return v.reduce((a, b) => a + b, res)
}, err => { console.log('err', err)})])), Promise.resolve([]))