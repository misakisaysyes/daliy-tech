const add = function(n) {
    const func = function(n_) {
        if (!n_) {
            return n
        } else {
            n += n_
            return func
        }
    }
    return func
}

console.log(add(1)(2)(3)())