import React, {Component} from 'react';
import './App.css';
import Data from './data';
import Group from './group';

class App extends Component {
    render() {
        return (
            <div className="train">
                <h1 className="title">Contact Tree</h1>
                <ul className="list">
                    {Data.contacts.map((item) => {
                        if (item.type === "Group") {
                            return <Group key={item.id} item={item}></Group>
                        } else {
                            return <li className="item" key={item.id} onClick={event => {
                                event.bubbles = false;
                            }}>{item.name}</li>
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
