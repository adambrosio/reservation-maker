import React, { Component } from "react";
import "../../components/loginTest.css"
import LoginForm from "../../components/LoginForm";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

    componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add("right");
    }

    changeState() {
        const { isLogginActive } = this.state;

        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Login" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
        return (
            <div className="login">
                <div className="container" ref={ref => (this.container = ref)}>
                    {isLogginActive && (
                        <LoginForm containerRef={ref => (this.current = ref)} />
                    )}
                </div>
                <RightSide
                    current={current}
                    currentActive={currentActive}
                    containerRef={ref => (this.rightSide = ref)}
                    onClick={this.changeState.bind(this)}
                />
            </div>
        );
    }
}

const RightSide = props => {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
        </div>
    );
};

export default Login;
