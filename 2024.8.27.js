const useAix = () => {
    const workerRef = useRef();

    useEffect(() => {
        workerRef.current = new Worker('worker.js');
        workerRef.current.postMessage({ op: 'init' });
        worker.addEventListener('error', (event) => {
            // 监控上报
        });
        worker.addEventListener('unhandleRejection', (event) => {
            // 监控上报
        });

        return () => {
            workerRef.current.terminate()
        }
    }, [])

    return {
        predict: (imgBase64) => new Promise((resolve, reject) => {
            const worker = workerRef.current
            const id = Math.floor(Math.random * 100000000);
            worker.postMessage({ op: 'predict', id, data: imgBase64 });
            worker.addEventListener('message', (event) => {
                if(event.id == id) {
                    resolve(event.result);
                }
            });
        })
    }
}