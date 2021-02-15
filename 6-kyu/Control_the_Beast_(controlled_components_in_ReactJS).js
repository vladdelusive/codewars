// https://www.codewars.com/kata/5a831574373c2e48cf00000d

const React = require("react");

class Beast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    render() {
        return <input id="controlledName" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
    }
}

Beast.defaultProps = {
    name: "Yeti"
};