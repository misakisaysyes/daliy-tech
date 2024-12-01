// 写一个函数，函数处理完对象后，会给对象增加一个__trace属性，该属性会记录对象中被访问属性的变量

const addTrace = (obj) => {
    const attributes = Object.getOwnPropertyNames(obj);
    const trace = [];
    for(let attr of attributes) {
        Object.defineProperty(obj, attr, {
            get() {
                trace.push(attr);
                // console.log(trace);
            }
        });
    }
    obj['__trace'] = trace;
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
addTrace(obj);
obj.b;
obj.c;
obj.e;
console.log(obj.__trace);