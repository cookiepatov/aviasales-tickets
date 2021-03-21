import React from "react";
import Transfers from './Transfers';
import { transferSortValues, ticketsSortValues } from '../data/data'
import SortOptions from "./SortOptions";
import AviasalesHandler from "../api/AviasalesHandler"
import Card from "./Card";

export default class TicketsManager extends React.Component {
    constructor(props) {
        super(props);
        this.transfersSort = this.transfersSort.bind(this);
        this.ticketsSort = this.ticketsSort.bind(this);
        this.getData = this.getData.bind(this);
        this._serverUrl = this.props.url;
        this.state = 
            {
                sortedTickets: {}, 
                renderedTickets: 4
            };
        this._sortTicketsVal = 'cheapest';
        this._sortTransfersVal = [-1];
        }
        
    transfersSort(value) {
        this._sortTransfersVal = value.slice();;
        this._sortTickets();
    }
    ticketsSort(value) {
        this._sortTicketsVal = value;
        this._sortTickets();
    }
    _resendData() {
        this.setState({sortedTickets: {}});
        const aviasalesHandler = new AviasalesHandler(this._serverUrl, this.getData);
        aviasalesHandler.requestData();
    }

    getData(data) {
        this._originalTicketsData = data;
        this._originalTicketsData.tickets.forEach((ticket, index)=>{ticket.key = 'ticket'+index})
        this.setState({sortedTickets: this._originalTicketsData.tickets});
        this._sortTickets();
        
    }
    _clearTickets() {
        document.querySelectorAll('.card').forEach((element) => element.remove())
    }

    _sortTickets() {
        this.setState({renderedTickets: 4})
        let filteredItems;
        if(!this._sortTransfersVal.includes(-1)) {
            filteredItems = this._originalTicketsData.tickets.filter(item =>{
                const transfersTo = item.segments[0].stops.length;
                const transfersFrom = item.segments[1].stops.length;
                return (this._sortTransfersVal.includes(transfersTo) 
                || this._sortTransfersVal.includes(transfersFrom));
            })
        }
        else {
            filteredItems = this._originalTicketsData.tickets.slice() || [];
        }
        switch (this._sortTicketsVal) {
            case ('cheapest'): {
                this._sortByPrice(filteredItems);
                break;
            }
            case ('fastest'): {
                this._sortByTime(filteredItems);
                break;
            }
            case ('optimal'): {
                this._sortByOptimal(filteredItems);
                break;
            }
            default : {
                this._sortByPrice(filteredItems);
                break;
            }
        }
    }

    _sortByTime(filteredItems) {
        const sortedTickets = filteredItems.sort((a, b)=>{
            const durationA = a.segments[0].duration + a.segments[1].duration;
            const durationB = b.segments[0].duration + b.segments[1].duration;
            return durationA - durationB;
        }); 
        this.setState({sortedTickets: sortedTickets});

    }

    _sortByPrice(filteredItems) {
    const sortedTickets = filteredItems.sort((a, b)=>{
        return a.price - b.price;
    }); 
    this.setState({sortedTickets: sortedTickets});
    }

    _sortByOptimal(filteredItems) { //FIX ALGORITHM LATER
/*         const parameters = {
            minPrice: filteredItems[0].price,
             maxPrice: filteredItems[0].price,
              minDuration: filteredItems[0].segments[0].duration + filteredItems[0].segments[1].duration,
               maxDuration: filteredItems[0].segments[0].duration + filteredItems[0].segments[1].duration
        };
        filteredItems.forEach((item)=>{
            const duration = item.segments[0].duration + item.segments[1].duration;
            item.price>=parameters.maxPrice&&(parameters.maxPrice = item.price);
            item.price<=parameters.minPrice&&(parameters.minPrice = item.price);
            duration>=parameters.maxDuration&&(parameters.maxDuration = duration);
            duration<=parameters.minDuration&&(parameters.minDuration = duration);
        })
        const priceRange = parameters.maxPrice-parameters.minPrice;
        const durationRange = parameters.maxDuration-parameters.minDuration;
        const incrCoeff = priceRange / durationRange */
        const incrCoeff = 1;
        const sortedTickets = filteredItems.sort((a, b)=>{
            const durationA = a.segments[0].duration + a.segments[1].duration;
            const durationB = b.segments[0].duration + b.segments[1].duration;
            return a.price + (durationA * incrCoeff) - b.price + (durationB * incrCoeff);
        });  
        this.setState({sortedTickets: sortedTickets});
    }

    _renderTickets(from, to) {
        return this.state.sortedTickets
        .filter((ticket, index)=>{return (index>=from && index<=to)})
        .map((ticket, index)=>{
                return(<Card ticket={ticket} key={ticket.key}/>)

        })
    }

    componentDidMount() {
        const aviasalesHandler = new AviasalesHandler(this._serverUrl, this.getData)
        aviasalesHandler.requestData();
    }

    componentDidUpdate() {
    }


    render() {
        return (
            <>
                <header className="header">
                <button type="submit" className="button-reset" onClick={()=>this._resendData()}>
                    </button>
                </header>
                <main className="content">
                    <Transfers items={transferSortValues} onChange={this.transfersSort}/>
                    <SortOptions items={ticketsSortValues} onChange={this.ticketsSort}/>
                    {(this.state.sortedTickets.length>0 && this._renderTickets(0, this.state.renderedTickets)) || <div className="loader"></div>}
                    <button type="button" 
                    className="show-more-button" 
                    onClick={()=>this.setState({renderedTickets: this.state.renderedTickets+5})}>
                        Показать еще пять билетов!
                </button>
                </main>
            </>
        )
    }
}