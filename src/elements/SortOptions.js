import React from "react";

export default class SortOptions extends React.Component {
    constructor(props) {
        super(props);
        this._items = this.props.items;
        this._sortOption = 'cheapest';
        this.changed = this.props.onChange;
    }
    _getOptions() {
        return this._items.map(item=>{
            return (
                <div className="sort-options__item" key={item.name}>
                    <input id={item.name} type="radio" name="sort-option" value={item.name} defaultChecked={item.checked} onInput={(e)=>{this._changeHandler(e)}}></input>
                    <label htmlFor={item.name}>{item.caption}</label>
                </div>)
        })
    }
    _changeHandler(e) {
        this._sortOption = e.target.value;
        this.changed(this._sortOption);
    }
    render() {
        return (
            <div className="sort-options">
                {this._getOptions()}
            </div>
        )
    }
}