
// try {
//     new Promise((reject, resolve) => {
//         throw new Error('err1')
//     }).catch(e => {
//         console.log('promise-catch', e.message)
//     })
//     throw new Error('err2')
// } catch(e) {
//     console.log('try-catch', e.message)
// }


const innerFunc = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, 512)
    // reject('innerFunc reject')
    // throw new Error('innerFunc error')
    console.log('innerFunc');
})

const outerFunc = async () => {
    try { 
         const res = await innerFunc()
        console.log('outerFunc')
        throw new Error('outerFunc error')
    } catch(e) {
        console.log('-', e || e.message)
    }
}

try {

outerFunc()

} catch(e){
    console.log('--', e || e.message)
}