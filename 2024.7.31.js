// const flat = (arr) => {
//     return arr.reduce((prev, cur) => {
//         // console.log(prev, cur);
//         if(Array.isArray(cur)) {
//             return [...prev, ...flat(cur)];
//         } else {
//             return [...prev, cur];
//         }
//     }, []);
// }
// console.log(flat([1,2,[3,[4,5]]]));

// const thousandSplit = (num) => {
//     let res = '';
//     num = '' + num;
//     for(let i = num.length - 1, j = 1; i > -1; i--) {
//         res = ((j++ % 3) || i == 0 ? num[i] : (',' + num[i])) + res;
//     }
//     return res;
// }
// console.log(dotSplit(12345678));
// console.log(dotSplit(123456));

// function clickOnce (el, callback) {
//     const wrapper = (...args) => {
//         callback(...args);
//         el.removeEventListener('click', wrapper);
//     }
//     el.addEventListener('click', wrapper);
// }

