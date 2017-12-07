export default () => {
    return new Promise(function (resolve, reject) {
        fetch('/get-config')
            .then(function (response) {
                return response.json;
            })
            .then(function (configuration) {
                resolve(configuration.users)
            })
            .catch(function (ex) {
                reject(ex);
            });
    });
};