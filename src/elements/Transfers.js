import React from "react";

export default class Transfers extends React.Component {
    constructor(props) {
        super(props);
        this._items = this.props.items;
        this._searchValues = [-1];
        this.changed = this.props.onChange;
    }
    _checkState() {
        const current = [];
        document.querySelector('.transfers')
        .querySelectorAll('.transfers__checkbox').forEach(checkbox => {
            checkbox.checked&&current.push(+checkbox.value)});
        this._searchValues = current;

        this.changed(this._searchValues);
    }
    _changeHandler(e) {
        const value = e.target.parentNode.attributes.data.value;
        const checkedStatus = e.target.checked;
        if((+value===-1) && (checkedStatus===true)) {
            this._swtichOffFilteres()
        };
        if((!(+value===-1)) && (checkedStatus===true)) {
            this._swtichOffAllFilter()
        }
        this._checkState();
    }

    _swtichOffAllFilter() {
        document.querySelector('.transfers')
        .querySelector('#transfer-all').checked=false;
    }
    _swtichOffFilteres() {
        document.querySelector('.transfers')
        .querySelectorAll('.transfers__checkbox').forEach(checkbox => {
            checkbox.id!=='transfer-all' && (checkbox.checked=false);
        })
    }

    _getCheckboxItems() {
        return this._items.map(item=> { return(
            <label className="transfers__item" htmlFor={item.name} key={item.name} data={item.value}>
                <input type="checkbox" name={item.name} id={item.name} className="transfers__checkbox" defaultChecked={item.checked} value={item.value}></input>
                <p className="transfers__checkbox-caption">{item.caption}</p>
            </label>
        )
        })
    }
    render() { 
        return (
            <fieldset className="transfers" onChange={(e)=>{this._changeHandler(e)}}>
                <label className="transfers__caption">Количество пересадок</label>
                {this._getCheckboxItems()}
            </fieldset>
        )
    }
}