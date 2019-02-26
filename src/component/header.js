import React, {Component} from "react";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayflag: false
        };
        this.clickshow = this.clickshow.bind(this);
    }

    clickshow() {
        this.setState({
            displayflag: !this.state.displayflag
        });
    }

    render() {
        let showdiv = {
            display: this.state.displayflag ? "block" : "none"
        };
        return (
            <div>{this.props.name}
                <div className="btn" onClick={this.clickshow}>按钮</div>
                <div className="hides" style={showdiv}>内容</div>
            </div>
        );
    }

};
