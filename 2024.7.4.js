const rpc = (url, params) => {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000;
        setTimeout(() => {
            resolve({ state: 'success', url, params, time });
        }, time);
    });
}

// 实现一个方法，最大并发请求数为10
// 若超过并发，将请求缓存起来
const rpcWrapper = (rpc) => {
    const concurrencyMap = new Map(); // 并发请求数组

    const _rpc_ = (url, params) => {
        const idx = concurrencyArray.length;
        // 并发请求有空位
        if (idx < 10) {
            const p = rpc(url, params);
            const k = Symbol();
            concurrencyMap.set(k, p);
            return p.finally(() => {
                concurrencyMap.delete(k);
            });
        } else {
            setTimeout(() => {
                _rpc_(url, params);
            }, 0);
        }
    }

    return rpc;
}

const limitRpc = rpcWrapper(rpc);

for(let i = 0; i < 100; i++) {
    rpc('url'+i, {}).then(res => console.log(res));
}
