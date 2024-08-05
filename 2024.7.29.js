// input 为string
// input 包含 字母, -,  _
// 连续的字母需要简写,  规则: 如果连续字母长度>2 首字母+中间长度+尾字母,  否则直接输出
// -, _ 需要正常输出
// jane-jack_jeffery -> j2e-j2k_j5y
// - _ 可能连续, 可能出现在input的任何地方
// 返回处理后的string

function abbr_plus(input) { 
    const queue = [];
    for(let i = 0; i < input.length; i++) {
        if(input[i] == '-' || input[i] == '_') {
            queue.push(i);
        } 
    }
    let res = '';
    [...queue, input.length].reduce((previ, curi) => {
        let temp = input.slice(previ, curi);
        if(queue.includes(previ - 1)) {
            res += input[previ - 1];
        }
        res += (temp.length > 2 ? (temp[0] + (temp.length - 2) + temp[temp.length - 1]) : temp);
        return curi + 1;
    }, 0);
    return res;
}

console.log(abbr_plus('jane-jack_jeffery'));
console.log(abbr_plus('jane-'));
console.log(abbr_plus('-jack'));
console.log(abbr_plus('-_'));
console.log(abbr_plus('-_jeffery'));
console.log(abbr_plus('-_jeffery_-'));
console.log(abbr_plus('_-_jeffery_-'));


