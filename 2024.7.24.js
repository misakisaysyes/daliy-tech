const deepClone = (obj) => {
    // 非引用类型处理
    if(obj !== null && typeof obj !== 'object') {
        return obj;
    }

    const res = Array.isArray(obj) ? [] : {};
    for(let k in obj) {
        if((Object.prototype.toString.call(obj[k]) == '[object Object]' || 
            Object.prototype.toString.call(obj[k]) == '[object Array]') &&
            obj.hasOwnProperty(k)) 
        {
            res[k] = deepClone(obj[k])
        } else {
            res[k] = obj[k];
        }
    }

    return res;
}

const obj = {
    a: 1,
    b: [2, 3, 4],
    c: 5,
}

const objCopy = deepClone(obj);
objCopy.a = 10;

console.log(obj, objCopy);


class EventBus {
    constructor() {
        this.events = {};
    }

    // 绑定事件
    on(k, fn) {
        if(!this.events[k]) {
            this.events[k] = [];
        }
        this.events[k].push(fn);
    }

    // 解绑事件
    off(k, fn) {
        if(!this.events[k]) return;
        this.events[k] = this.events[k].filter(e => e !== fn);
    }

    // 执行事件
    emit(k) {
        if(!this.events[k]) return;
        this.events[k].forEach(e => {
            e(...[...arguments].slice(1));
        });
    }

    // 绑定事件执行一次
    once(k, fn) {
        const wrapper = (...args) => {
            this.off(k, wrapper);
            fn(...args);
        }
        this.on(k, wrapper);
    }
}

const bus = new EventBus();
function test1(param) {
    console.log('test1', param);
}
function test2(param1, param2) {
    console.log('test2', param1, param2);
}
function testOnce(p1, p2, p3) {
    console.log(p1, p2, p3);
}
// bus.on('test', test1);
// bus.on('test', test2);
// bus.emit('test', 1, 2);
bus.once('testOnce', testOnce);
bus.emit('testOnce', 1, 2, 3);
bus.emit('testOnce', 1, 2, 3, 4);
