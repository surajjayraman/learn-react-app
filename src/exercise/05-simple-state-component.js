import React, {component} from 'react';

class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return <div>{this.state.counter}</div>
    }
}
