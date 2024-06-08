// console.log(/_?/g.test('tet_tse'))
// console.log('test_test_a'.match(/_\w/g))
// console.log('_t'.replace('_', '').toUpperCase())

const deepClone = obj => {
    if (!obj) return obj
    let temp = {}
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            let tKey = key
            if (/_/g.test(key)) {
                let arr  = key.match(/_\w/g)
                arr.forEach(t => {
                    tKey = key.replace(t, t.replace('_','').toUpperCase())
                })
            }
            temp[tKey] = deepClone(obj[key])
        } else {
            temp[key] = obj[key]
        }
    })
    return temp
}

let a = {
    test_t1: {},
    a: {
        b1: 1,
        b2: 2
    },
    a1: {
        c1: 3,
    },
    a3: 0
}

console.log(deepClone(a))