import { Component } from "react";

class Filters extends Component {
  onChange = (e) => {
    this.props.filter(e.target.value, e.target.id);
  };
  render() {
    return (
      <div>
        Print Type:
        <select onChange={this.onChange} id="print">
          <option value="All">All</option>
          <option value="Books">Books</option>
          <option value="magamzines">Magamzines</option>
        </select>
        Book Type:
        <select onChange={this.onChange} id="type">
          <option value="ebooks">No Filter</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="partial">partial</option>
        </select>
      </div>
    );
  }
}
export default Filters;
