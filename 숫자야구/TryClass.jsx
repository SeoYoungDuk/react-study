import React, { PureComponent }from "react";

class Try extends PureComponent {
    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}
Try.displayName = 'Try';

export default Try;