
const request = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('test');
        reject('request reject')
    }, 1000)
})

(async () => {
try {
    await request();
} catch(e) {
    console.log('try-catch 1', e)
}})()