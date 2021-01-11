export default (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    });
};