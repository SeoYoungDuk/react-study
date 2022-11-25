import React, {PureComponent} from "react";

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {a: 'b', c: 'd'},
        array: [{inside: [3]}],
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        const obj = this.state.array[0].inside;
        obj.push(3);
        this.setState({
            array: [obj],
        });
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test