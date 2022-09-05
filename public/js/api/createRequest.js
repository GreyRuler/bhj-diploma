/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = options.responseType;
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            options.callback(xhr.response)    
        }
    })
    if (options.method === 'GET') {
        let url = options.url + '?'
        if (options.data) {
            for (const [key, value] of Object.entries(options.data)) {
                url += `${key}=${value}&`
            }
        }
        xhr.open(options.method, url.slice(0, -1))
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
