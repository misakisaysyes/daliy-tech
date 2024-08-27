// 实现 once 函数

function sayHi() {
    console.log("hi!");
}
  
  function once(callback) {
    let flag;
    return function(...args) {
        if(flag) return;
        flag = true;
        callback(...args);
    }
  }
  
  const sayOnce = once(sayHi);
  
  sayOnce();
  sayOnce();


var a = {
    i: 0,
    valueOf() {
        return ++this.i;
    }
}
  // 如何定义、声明
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
