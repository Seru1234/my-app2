import { Component } from "react";

export interface IProps {
  initialValue: number;
}

export interface IState {
  count: number;
}

export class LifecycleMethod extends Component<IProps, IState> {
  state: IState = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    console.log("componentdid ammount call");
    this.setState({ count: this.state.count + 1 });
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return false;
  }

  onClickButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentWillReceiveProps(nextProps: IProps) {
    console.warn("componentWillReceiveProps called");
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    console.warn("componentDidUpdate called", prevProps, prevState);
  }

  render() {
    return (
      <div>
        Count with class component: {this.state.count}
        <br />
        <button onClick={this.onClickButton} className="btn">
          Increment value
        </button>
      </div>
    );
  }
}

export default LifecycleMethod;
