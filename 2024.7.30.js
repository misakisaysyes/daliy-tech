// input 为string
// input 包含 字母, -,  _
// 连续的字母需要简写,  规则: 如果连续字母长度>2 首字母+中间长度+尾字母,  否则直接输出
// -, _ 需要正常输出
// jane-jack_jeffery -> j2e-j2k_j5y
// - _ 可能连续, 可能出现在input的任何地方
// 返回处理后的string

// 先记录下字符串中分割符的位置
function abbr_plus(input) {
    const curQueue = [];
    for(let i = 0; i < input.length; i++) {
        (input[i] == '-' || input[i] == '_') && curQueue.push(i);
    }
    let res = '';
    [...curQueue, input.length].reduce((previ, curi) => {
        const tempStr = input.slice(previ, curi);
        if(tempStr.length < 3) {
            res += tempStr;
        } else {
            res += (tempStr[0] + (tempStr.length - 2) + tempStr[tempStr.length - 1]);
        }
        res += curi < input.length ? input[curi] : '';
        return curi + 1;
    }, 0);
    return res;
}

// console.log(abbr_plus('jane-jack_jeffery'));
// console.log(abbr_plus('jane-'));
// console.log(abbr_plus('-jack'));
// console.log(abbr_plus('-_'));
// console.log(abbr_plus('-_jeffery'));
// console.log(abbr_plus('-_jeffery_-'));
// console.log(abbr_plus('_-_jeffery_-'));

// 版本排序
// 桶排序 最先排序的位权重最低。
const versions = ["1.45.0", "1.5", "6", "2.3.4.5"];
const sortVersions = (versions) => {
    versions = versions.map(v => v.split('.'));
    // console.log(versions);
    const maxLen = versions.reduce((prev, cur) => prev > cur.length ? prev : cur.length, 0);
    // console.log(maxLen);
    for (let i = maxLen - 1; i > -1; i--) {
        versions.sort((av, bv) => {
            if(i < av.length && i < bv.length) {
                return bv[i] - av[i];
            } else if (i >= av.length || i >= bv.length) {
                return 1;
            } 
        });
    }
    return versions.map(v => v.join('.'))
}

console.log(sortVersions(versions));