// let obj1 = {name: 'obj1'};
// let obj2 = {name: 'obj2'}
// function fn() {
//   console.log(this.name);
// }
// fn = fn.bind(obj1);
// fn();
// fn = fn.bind(obj2);
// fn();

// 防抖函数，n秒钟内只触发一次，如果在n秒中内又触发了，那么会等待n秒钟后再执行

const debounce = (fn, delay) => {
    let timer
    return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

for(let i = 0;  i < 100; i++) {
    debounce(() => console(i), 1000)
}


// const sum = (a, b) => {
//     let carry = 0
//     let res = ''
//     let i = a.length - 1
//     let j = b.length - 1
//     while(i || j) {
//         if (i >= 0 && j >= 0) {
//             let temp = Number(a[i]) + Number(b[j]) + carry
//             res += temp % 10
//             carry = temp / 10
//             i--
//             j--
//         } 

//         if (i >= 0 && j < 0) {
//             let temp = Number(a[i]) + carry
//             res += temp % 10
//             carry = temp / 10
//             i--
//         }

//         if (j >=0 && i < 0) {
//             let temp = Number(b[j]) +carry
//             res += temp % 10
//             carry = temp / 10
//             j--
//         }
//     }
//     return res
// }


// const sum = (a, b) => {
//     let carry = 0
//     let res = ''
//     a = a.split('')
//     b = b.split('')
//     while(a.length || b.length) {
//         let temp = carry
//         a.length && (temp += Number(a.pop()))
//         b.length && (temp += Number(b.pop()))
//         console.log(temp)
//         carry = Math.floor(temp / 10)
//         res += temp % 10
//     }
//     return res.split('').reverse().join('')
// }

// console.log(sum('1230', '123'))