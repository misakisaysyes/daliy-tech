// 并发请求urls, 并发请求数limit

const rpc = (url) => new Promise((resolve, reject) => {
    const timeStamp = Math.random() * 1000;
    setTimeout(() => {
        resolve(url + '-' + timeStamp);
    }, timeStamp);
});

const urls = [
    'https://www.test.com/a',
    'https://www.test.com/b',
    'https://www.test.com/c',
    'https://www.test.com/d',
    'https://www.test.com/e',
    'https://www.test.com/f',
    'https://www.test.com/g',
    'https://www.test.com/h',
    'https://www.test.com/i',
    'https://www.test.com/j',
    'https://www.test.com/k',
    'https://www.test.com/l',
    'https://www.test.com/m',
    'https://www.test.com/n',
    'https://www.test.com/o',
    'https://www.test.com/p',
    'https://www.test.com/q',
    'https://www.test.com/r',
    'https://www.test.com/s',
    'https://www.test.com/t',
];

const concurrentRpc = (urls, limit, callback) => {
    const hashMap = new Map();
    const innerRpc = () => {
        if(!urls.length || hashMap.size >= limit) return;
        const url = urls.shift();
        hashMap.set(url, rpc(url).then(callback).finally(_ => {
            hashMap.delete(url);
            innerRpc();
        }));
    }
    innerRpc();
}



concurrentRpc(urls, 3, console.log)

// for(let url of urls) {
//     rpc(url).then(_ => console.log(_));
// }