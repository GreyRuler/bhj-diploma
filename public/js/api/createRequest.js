/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    console.log(options)
    const xhr = new XMLHttpRequest()
    xhr.responseType = options.responseType;
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            options.callback(xhr.response)    
        }
    })
    if (options.method === 'GET') {
        xhr.open(options.method, `${options.url}?mail=${options.data?.email}&password=${options.data?.password}`)
        xhr.send()
    } else {
        const formData = new FormData()
        for (const [key, value] of Object.entries(options.data)) {
            formData.append(key, value)
        }
        xhr.open(options.method, options.url)
        xhr.send(formData)
    }
};
