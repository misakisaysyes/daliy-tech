let arr = [1,2,3,[4,5, [6,7]]].reduce((prev, cur) => {
    return Array.isArray(cur) ? prev.concat(cur) : [ ...prev, cur]
}, [])

console.log('arr', arr)

let arr_ = [1,2,3,[4,5, [6,7]]]
while(arr_.some(e => Array.isArray(e))) {
    arr_ = arr_.reduce((prev, cur) => Array.isArray(cur) ? [ ...prev, ...cur] : [...prev, cur], [])
}

console.log(arr_)