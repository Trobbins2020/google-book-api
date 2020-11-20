import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.formHandler = this.formHandler.bind(this);
  }
  formHandler = (e) => {
    e.preventDefault();
    this.props.search(this.state.search);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          Search:
          <input
            type="text"
            name="search"
            id="search"
            onChange={this.onChange}
            required
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
export default Search;
