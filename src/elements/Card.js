import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this._price = this.props.ticket.price;
        this._carrier = this.props.ticket.carrier;
        this._startFrom = this.props.ticket.segments[0].origin;
        this._startTo = this.props.ticket.segments[0].destination;
        this._startDate = this.props.ticket.segments[0].date;
        this._startStops = this.props.ticket.segments[0].stops;
        this._startDuaration = this.props.ticket.segments[0].duration;
        this._finishFrom = this.props.ticket.segments[1].origin;
        this._finishTo = this.props.ticket.segments[1].destination;
        this._finishDate = this.props.ticket.segments[1].date;
        this._finishStops = this.props.ticket.segments[1].stops;
        this._finishDuaration = this.props.ticket.segments[1].duration;
    }

    _getCarrierLogo() {
        return `//pics.avs.io/99/36/${this._carrier}.png`
    }

    _getDate(date, duration){
        const options = {
            hour: 'numeric', minute: 'numeric',
            hour12: false
          };
        const dateObj = new Date(date);
        const dateFrom = dateObj.toLocaleString('ru',options);
        dateObj.setMinutes(dateObj.getMinutes() + duration);
        const dateTo = dateObj.toLocaleString('ru',options);
        return `${dateFrom} - ${dateTo}`
    }

    _getStopsString(stops) {
        return stops.join(', ')
    }

    _getPrice() {
        const price=this._price+''
        return price.substr(0, 2)+" "+price.substr(2);
    }
    _getDaration(time) {
        const hours = parseInt(time / 60)
        const mins = time % 60
        return `${hours}ч ${mins}м`
    }

    _getTransfersText(stops) {
        const number = stops.length;
        switch (number) {
            case 1 : {
                return '1 пересадка';
            }
            case 2: 
            case 3: 
            case 4 : {
                return `${number} пересадки`;
            }
            default : {
                return `${number} пересадок`;
            }
        }
    }

    render() {
        return(
        <div className="card">
          <div className="card__main-info">
            <span className="card__price">{this._getPrice()} Р</span>
            <img className="card__company" alt={this._carrier} src={this._getCarrierLogo()}></img>
          </div>
          <div className="card__flight-info">
            <div className="info info_type_to">
              <span className="info__title">
                {this._startFrom} - {this._startTo}
              </span>
              <span className="info__value">
                {this._getDate(this._startDate, this._startDuaration)}
              </span>
            </div>
            <div className="info info_type_time-to">
              <span className="info__title">
                В пути
              </span>
              <span className="info__value">
                {this._getDaration(this._startDuaration)}
              </span>
            </div>
            <div className="info info_type_transfers-to">
              <span className="info__title">
                {this._getTransfersText(this._startStops)}
              </span>
              <span className="info__value">
                {this._getStopsString(this._startStops)}
              </span>
            </div>
            <div className="info info_type_from">
              <span className="info__title">
              {this._finishFrom} - {this._finishTo}
              </span>
              <span className="info__value">
              {this._getDate(this._finishDate, this._finishDuaration)}
              </span>
            </div>
            <div className="info info_type_time-to">
              <span className="info__title">
                В пути
              </span>
              <span className="info__value">
              {this._getDaration(this._finishDuaration)}
              </span>
            </div>
            <div className="info info_type_transfers-to">
              <span className="info__title">
              {this._getTransfersText(this._finishStops)}
              </span>
              <span className="info__value">
              {this._getStopsString(this._finishStops)}
              </span>
            </div>
          </div>
        </div>
        )
        
    }
}