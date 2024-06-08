const convertor = str => {
    str = str.split('')
    for(let i = 0, j = str.length - 1; i <= j; i++, j--) {
        let stri, strj
        if(/[A-Z]/.test(str[i])) {
            strj = str[j].toUpperCase()
        } else {
            strj = str[j].toLowerCase()
        }

        if(/[A-Z]/.test(str[j])) {
            stri = str[i].toUpperCase()
        } else {
            stri = str[i].toLowerCase()
        }

        str[i] = strj
        str[j] = stri
    }
    return str.join('')
}

console.log('AbcDeFGh')
console.log(convertor('AbcDeFGh'))