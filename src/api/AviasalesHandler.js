import Loader from './Loader'

export default class AviasalesHandler {
    constructor(url, onGetData) {
        this._searchIdUrl = url[0];
        this._searchTicketsUrl = url[1];
        this.returnData = onGetData;
    }
    requestData() {
        const loader = new Loader(this._searchIdUrl);
        loader.getData().then(search => {
            loader.requestNewData(
                this._searchTicketsUrl + search.searchId)
                .then(ticketsData => {
                    if(ticketsData.tickets) {
                        this.returnData(ticketsData);
                    }
                    else {
                        setTimeout(()=>this.requestData(),1000);
                    }
                })
        });
    }
}