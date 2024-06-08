// Q1
// function Foo() {
//     getName = function() {
//         console.log(1)
//     }
//     return this
// }

// Foo.getName = function() {
//     console.log(2)
// }

// Foo.prototype.getName = function() {
//     console.log(3)
// }

// var getName = function() {
//     console.log(4)
// }

// function getName() {
//     console.log(5)
// }

// Foo.getName() // 2
// getName() // 4
// Foo().getName() // 1
// getName() // 1
// new Foo.getName() // 2
// new Foo().getName() // 1 => 3
// new new Foo().getName() // => 3

// Q2
// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }

// async function async2() {
//     console.log('async2')
// }

// console.log('script start')

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// async1()

// new Promise(function (resolve) {
//     console.log('promise1')
//     resolve()
// }).then(function() {
//     console.log('promise2')
// })
// console.log('script end')

// // script start
// // async1 start
// // async2
// // promise1
// // script end
// // async1 end
// // promise2
// // setTimeout

// // Q3
// function A() {
//     console.log(1)
// }
// function Fn() {
//     A = function() {
//         console.log(2)
//     }
//     return this
// }
// Fn.A = A
// Fn.prototype = {
//     A: () => {
//         console.log(3)
//     }
// }

// A() // 1
// Fn.A() // 1
// Fn().A() // 2
// new Fn.A() // 1
// new Fn().A() // 3
// new new Fn().A() // 3

// // Q4
// 输入一个正数，输出所有和为该正数的连续

const func = N => {
    if (N == 1 || N == 2) {
        return [[N]]
    }

    let start = 1
    let end = 2
    let res = []
    let sum = start + end
    while(start + end <= N) {
        if (sum < N) {
            sum += ++end
        }

        if (sum > N) {
            sum -= start++
        }

        if (sum === N) {
            res.push(new Array(end - start + 1).fill(start).map((e, i) => e + i))
            sum = sum - start++ + ++end
        }

    }

    return res
}

console.log(func(15))


// 快排
const quickSort = (arr, low, high) => {
    if (low >= high) return
    let i = low
    let j = high
    let pivot = arr[i]
    while(i < j) {
        while(i < j && arr[j] >= pivot) j--
        i < j && (arr[i++] = arr[j])
        while(i < j && arr[i] <= pivot) i++
        i < j && (arr[j--] = arr[i])
    }
    arr[i] = pivot
    quickSort(arr, low, i - 1)
    quickSort(arr, i + 1, high)
}

let arr = [3,4,1,2,5]
// quickSort(arr, 0, 4)
console.log(arr)

// 冒泡
const bubble = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}

bubble(arr)
console.log(arr)


