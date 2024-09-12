/**
 * 获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
4. 不支持URLSearchParams方法
www.baidu.com?a=1&b=2&a=4     fn(‘a’) => [1, 4] fn(‘b’)= 2
 */

const fn = (k) => {
    const hashMap = new Map();
    for(let kv of location.search.slice(1).split('&')) {
        const [k, v] = kv.split('=');
        const preV = hashMap.get(k);
        hashMap.set(k,  !preV ? v : Array.isArray(preV) ? [...preV, v]: [preV, v]);
    } 
    return hashMap.get(k);
}

