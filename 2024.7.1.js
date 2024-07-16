
/**
 * 微任务队列会清空之后在清空宏任务队列
 */

Promise.resolve().then(() => {
    console.log(1)
    setTimeout(() => {
        console.log(11);
    }, 0);
}).then(() => console.log(3));


Promise.resolve().then(() => console.log(2)).then(() => console.log(4));