import "./PostaddForm.css";
import React from "react";
export default class PostaddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you thinking about?"
          onChange={this.onValueChange}
          value={this.state.text}
          className="form-control new-post-label"
        />
        <button
          type="submit"
          //  onClick={() => this.props.onAdd(this.onValueChange)}
          className="btn btn-secondary"
        >
          Добавить
        </button>
      </form>
    );
  }
}
