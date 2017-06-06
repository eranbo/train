import React, {Component} from 'react';

export default class Group extends Component {

    constructor(props){
        super(props);
        this.handleGroupClick = this.handleGroupClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
        this.state = {isToggleOn : false};
    }

    handleContactClick(event) {
        event.stopPropagation();
    }

    handleGroupClick(event) {
        event.stopPropagation();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        if (this.state.isToggleOn) {
            return <li key={this.props.item.id} onClick={this.handleGroupClick}>
                <span className="item clickable">{this.props.item.name}</span>
                <ul className="list">
                    {this.props.item.contacts.map((item) => {
                        if (item.type === "Group") {
                            return <Group key={item.id} item={item}></Group>
                        } else {
                            return <li className="item" key={item.id} onClick={this.handleContactClick}>{item.name}</li>
                        }
                    })}
                </ul>
            </li>
        }
        else {
            return <li className="item clickable" key={this.props.item.id} onClick={this.handleGroupClick}>{this.props.item.name}</li>
        }
    }
}