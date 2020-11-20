import React, { Component } from "react";
import Filters from "./Filter";
import Search from "./Search";
import List from "./List";

// const apiKey = "AIzaSyBirDJ4R_vt61OFz0RsEb2TLGx_d3JE8RE";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      print: "All",
      type: "ebooks",
    };
  }

  seach = (term) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=${this.state.type}&print_type=${this.state.print}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          books: data.items,
        });
      })
      .catch((err) => console.error(err));
  };

  filter = (value, id) => {
    this.setState({ [id]: value });
    let term = document.getElementById("search").value;
    if (term !== "" && term !== " ") {
      this.seach(term);
    }
  };

  render() {
    return (
      <div>
        <h2>Google Book Search</h2>
        <Search search={this.seach} />
        <Filters filter={this.filter} />
        <List
          books={this.state.books}
          type={this.state.type}
          print={this.state.print}
        />
      </div>
    );
  }
}
export default App;
