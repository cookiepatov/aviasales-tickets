
export default class Loader {
    constructor(url) {
        this._url = url;
    }
    _loadJson() {
        return fetch(this._url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          return data;
        },(error)=> {
            return error
        });
    }
    getData() {
        return this._loadJson();
    }
    requestNewData(url) {
        this._url = url
        return this._loadJson();
    }
}