// 0
// 1
// 10


const currencyFormatter = (cent) => {
    let cent_ = String(cent)
    // 如果含有非数字字符串
    if(!/^\d+$/.test(cent_)) {
       return '0.00'
    }
    switch(cent_.length) {
        case 1:
            return `0.0${cent_}`
        case 2:
            return `0.${cent_}`
        default:
            return cent_.replace(/((\\d)(?=(\\d{3})+)(..$)/g, '$1,$2.$3')
    }
}