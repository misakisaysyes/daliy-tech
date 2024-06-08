const func = (arr, num) => {
    let  m = {}
    return arr.map(n => {
        !m[n] && (m[n] = 0)
        if(m[n] === num) {
            return ''
        } else {
            m[n]++
            return n
        }
    }).filter(n => n !== '')
}


const func = (arr, num) => {
    let num_ = num
    return arr.reduce()
}

const arr = [1,1,1,2,3,4,4,5]
const num = 2

console.log(func(arr, num)) 